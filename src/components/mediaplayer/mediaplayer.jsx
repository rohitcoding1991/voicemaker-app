import { Box, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import { useGlobalContext } from "../../contextApi/contextApi";

const MediaPlayer = () => {
  const { textToSpeech, text, handleClickVariant, handlePause, playIcon } =
    useGlobalContext();

  const togglePlay = () => {
    if (text) {
      textToSpeech();
    } else {
      handleClickVariant("error")();
    }
  };

  return (
    <Box className="flex flex-col items-center justify-center">
      {/* Main Play/Pause Button */}
      <Box className="relative group">
        {/* Glow effect on hover */}
        <Box
          className={`absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 ${
            playIcon ? 'bg-accent-400' : 'bg-primary-400'
          }`}
        />

        {/* Button Container */}
        <Box
          className="relative cursor-pointer transform transition-all duration-300 hover:scale-110 active:scale-95"
          onClick={playIcon ? handlePause : togglePlay}
          role="button"
          aria-label={playIcon ? "Pause speech" : "Play speech"}
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              playIcon ? handlePause() : togglePlay();
            }
          }}
        >
          <Box className="relative">
            {/* Animated ring */}
            {playIcon && (
              <Box className="absolute inset-0 rounded-full animate-ping opacity-20">
                <Box className="w-full h-full rounded-full bg-accent-500" />
              </Box>
            )}

            {/* Icon */}
            {playIcon ? (
              <PauseCircleFilledIcon
                sx={{
                  fontSize: { xxs: 48, xs: 52, sm: 56, md: 64 },
                  background: 'linear-gradient(135deg, #d946ef 0%, #8b5cf6 100%)',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  filter: 'drop-shadow(0 4px 12px rgba(217, 70, 239, 0.4))',
                  '&:hover': {
                    filter: 'drop-shadow(0 6px 16px rgba(217, 70, 239, 0.5))',
                  },
                }}
                className="text-white"
              />
            ) : (
              <PlayCircleIcon
                sx={{
                  fontSize: { xxs: 48, xs: 52, sm: 56, md: 64 },
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  filter: 'drop-shadow(0 4px 12px rgba(139, 92, 246, 0.4))',
                  '&:hover': {
                    filter: 'drop-shadow(0 6px 16px rgba(139, 92, 246, 0.5))',
                  },
                }}
                className="text-white"
              />
            )}
          </Box>
        </Box>
      </Box>

      {/* Status Text */}
      <Box className="mt-4 xxs:mt-2 xs:mt-3">
        <Typography
          variant="caption"
          className={`font-medium transition-all duration-300 ${
            playIcon
              ? 'text-accent-600 animate-pulse-gentle'
              : 'text-neutral-500'
          }`}
          sx={{
            fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
            letterSpacing: '0.5px',
          }}
        >
          {playIcon ? (
            <Box component="span" className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              Playing
            </Box>
          ) : (
            'Ready to Play'
          )}
        </Typography>
      </Box>

      {/* Visual Equalizer Effect (when playing) */}
      {playIcon && (
        <Box className="flex items-end gap-1 mt-3 xxs:mt-2 xs:mt-3 h-8">
          {[...Array(5)].map((_, i) => (
            <Box
              key={i}
              className="w-1.5 bg-gradient-to-t from-primary-500 to-accent-500 rounded-full"
              sx={{
                '@keyframes pulseHeight': {
                  '0%, 100%': { height: '4px' },
                  '50%': { height: '32px' },
                },
                animation: 'pulseHeight 0.6s ease-in-out infinite',
                animationDelay: `${i * 0.1}s`,
                minHeight: '4px',
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MediaPlayer;
