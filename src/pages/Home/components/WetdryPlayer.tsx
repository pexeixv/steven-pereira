import { useState, useRef, useEffect } from 'react'
import { Play, Pause, RotateCcw } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// Import all audio files
import maleVocalsDry from '@/assets/audio/male-vocals-dry.m4a'
import maleVocalsWet from '@/assets/audio/male-vocals-wet.m4a'
import acousticGuitarDry from '@/assets/audio/acoustic-guitar-dry.m4a'
import acousticGuitarWet from '@/assets/audio/acoustic-guitar-wet.m4a'
import femaleVocalsDry from '@/assets/audio/female-vocals-dry.m4a'
import femaleVocalsWet from '@/assets/audio/female-vocals-wet.m4a'
import drumsDry from '@/assets/audio/drums_dry.m4a'
import drumsWet from '@/assets/audio/drums-wet.m4a'
import synthDry from '@/assets/audio/synth_dry.m4a'
import synthWet from '@/assets/audio/synth_wet.m4a'
import electricPianoDry from '@/assets/audio/electric-piano-dry.m4a'
import electricPianoWet from '@/assets/audio/electric-piano-wet.m4a'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'

const audioFiles = {
  'male-vocal': { label: 'Male Vocal', dry: maleVocalsDry, wet: maleVocalsWet },
  'acoustic-guitar': { label: 'Acoustic Guitar', dry: acousticGuitarDry, wet: acousticGuitarWet },
  'female-vocal': { label: 'Female Vocal', dry: femaleVocalsDry, wet: femaleVocalsWet },
  drums: { label: 'Drums', dry: drumsDry, wet: drumsWet },
  synth: { label: 'Synth', dry: synthDry, wet: synthWet },
  'electric-piano': { label: 'Electric Piano', dry: electricPianoDry, wet: electricPianoWet },
}

const WetDryPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isWet, setIsWet] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedTrack, setSelectedTrack] = useState<keyof typeof audioFiles>('male-vocal')

  const dryAudioRef = useRef<HTMLAudioElement>(null)
  const wetAudioRef = useRef<HTMLAudioElement>(null)
  const animationFrameRef = useRef<number>()

  // Reset and load audio when track changes
  useEffect(() => {
    const dry = dryAudioRef.current
    const wet = wetAudioRef.current

    if (!dry || !wet) return

    // Stop playback
    setIsPlaying(false)
    dry.pause()
    wet.pause()

    // Reset state
    setCurrentTime(0)
    setDuration(0)
    setIsLoading(true)

    // Set volumes
    dry.volume = 1
    wet.volume = 0

    const handleLoadedData = () => {
      if (dry.readyState >= 2 && wet.readyState >= 2) {
        setDuration(dry.duration)
        setIsLoading(false)
      }
    }

    dry.addEventListener('loadeddata', handleLoadedData)
    wet.addEventListener('loadeddata', handleLoadedData)

    // Load new tracks
    dry.src = audioFiles[selectedTrack].dry
    wet.src = audioFiles[selectedTrack].wet
    dry.load()
    wet.load()

    return () => {
      dry.removeEventListener('loadeddata', handleLoadedData)
      wet.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [selectedTrack])

  useEffect(() => {
    const updateTime = () => {
      const active = isWet ? wetAudioRef.current : dryAudioRef.current
      if (active && isPlaying) {
        setCurrentTime(active.currentTime)
        animationFrameRef.current = requestAnimationFrame(updateTime)
      }
    }

    if (isPlaying) {
      animationFrameRef.current = requestAnimationFrame(updateTime)
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isPlaying, isWet])

  useEffect(() => {
    const dry = dryAudioRef.current
    const wet = wetAudioRef.current
    if (!dry || !wet) return

    if (isWet) wet.currentTime = dry.currentTime
    else dry.currentTime = wet.currentTime

    dry.volume = isWet ? 0 : 1
    wet.volume = isWet ? 1 : 0

    if (isPlaying) {
      if (isWet) {
        wet.play()
        dry.pause()
      } else {
        dry.play()
        wet.pause()
      }
    }
  }, [isWet, isPlaying])

  const togglePlay = () => {
    const active = isWet ? wetAudioRef.current : dryAudioRef.current
    if (!active) return

    if (isPlaying) active.pause()
    else active.play()

    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    const dry = dryAudioRef.current
    const wet = wetAudioRef.current
    if (dry && wet) {
      dry.currentTime = 0
      wet.currentTime = 0
      setCurrentTime(0)

      if (isPlaying) {
        const active = isWet ? wet : dry
        active.play()
      }
    }
  }

  const handleSeek = (value: number[]) => {
    const newTime = value[0]
    const dry = dryAudioRef.current
    const wet = wetAudioRef.current
    if (dry && wet) {
      dry.currentTime = newTime
      wet.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const formatTime = (time: number) => {
    const m = Math.floor(time / 60)
    const s = Math.floor(time % 60)
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  return (
    <Card>
      <CardContent className="flex gap-8 max-lg:flex-col">
        <div>
          {/* Track Selection */}
          <div className="space-y-2">
            <Label htmlFor="track-select" className="text-sm font-medium">
              Select Track
            </Label>
            <Select
              value={selectedTrack}
              onValueChange={(value) => setSelectedTrack(value as keyof typeof audioFiles)}
            >
              <SelectTrigger id="track-select" className="w-full cursor-pointer lg:min-w-xs">
                <SelectValue placeholder="Select a track" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(audioFiles).map(([key, { label }]) => (
                  <SelectItem key={key} value={key} className="cursor-pointer">
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Wet/Dry Toggle */}
          <div className="flex gap-2 mt-4">
            <Checkbox
              id="apply-effect"
              checked={isWet}
              onCheckedChange={(value) => setIsWet(!!value)}
            />

            <Label htmlFor="apply-effect" className="font-semibold cursor-pointer">
              Apply effect
            </Label>
          </div>
        </div>

        {/* Hidden audio */}
        <audio ref={dryAudioRef} preload="auto" />
        <audio ref={wetAudioRef} preload="auto" />

        <div className="w-full">
          {/* Status Indicator */}
          <div className="mb-4 text-centers">
            {isLoading ? (
              <p className="text-sm text-gray-500">Loading audio files...</p>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
                  }`}
                />
                <p className="text-sm text-gray-600">
                  {isPlaying ? 'Playing' : 'Paused'} ·{' '}
                  {isWet ? 'Wet (Processed)' : 'Dry (Original)'}
                </p>
              </div>
            )}
          </div>

          {/* Progress */}
          <div className="w-full space-y-2">
            <Slider
              value={[currentTime]}
              max={duration || 100}
              step={0.1}
              onValueChange={handleSeek}
              disabled={isLoading}
              className="cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 pr-11">
            <button
              onClick={handleReset}
              disabled={isLoading}
              className="p-3 transition-colors bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 disabled:opacity-50"
            >
              <RotateCcw className="w-5 h-5 text-gray-700" />
            </button>

            <button
              onClick={togglePlay}
              disabled={isLoading}
              className="p-6 transition-all duration-300 transform rounded-full shadow-lg cursor-pointer bg-gradient-to-r from-blue-500 to-sky-500 hover:from-sky-5600 hover:to-blue-500 disabled:opacity-50 hover:scale-105"
            >
              {isPlaying ? (
                <Pause className="text-white size-8" />
              ) : (
                <Play className="text-white size-8" />
              )}
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default WetDryPlayer
