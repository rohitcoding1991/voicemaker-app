import { Box, Container, Typography, TextField, Button } from "@mui/material";
import InputSlider from "./components/slider/slider";
import VoiceMakerLogo from "../src/assets/voice-maker-logo.svg";
import MediaPlayer from "./components/mediaplayer/mediaplayer";
import { useGlobalContext } from "./contextApi/contextApi";
import VoicesDropdown from "./components/voicesDropdown/voicesDropdown";

function App() {
  const {
    text,
    setText,
    textToSpeech,
    handleStop,
    setReset,
    reset,
    handleClickVariant,
  } = useGlobalContext();

  function handleValidation() {
    if (text) {
      textToSpeech();
    } else {
      handleClickVariant("error")();
    }
  }

  return (
    <Box className="min-h-screen flex flex-col items-center justify-center py-4 xxs:py-2 xs:py-3 sm:py-6 lg:py-8 px-2 xxs:px-1 xs:px-2 sm:px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <Box className="absolute inset-0 -z-10 overflow-hidden">
        <Box className="absolute top-0 left-0 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl animate-pulse-gentle" />
        <Box className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-300/20 rounded-full blur-3xl animate-pulse-gentle" style={{ animationDelay: '1s' }} />
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-200/10 rounded-full blur-3xl" />
      </Box>

      <Container maxWidth="xl" className="relative z-10">
        {/* Header Section with Logo and Title */}
        <Box className="flex flex-col items-center mb-6 xxs:mb-4 xs:mb-5 sm:mb-6 lg:mb-8 animate-fade-in-up">
          <Box className="flex items-center gap-3 xxs:gap-2 xs:gap-3 sm:gap-4 mb-3 xxs:mb-2 xs:mb-3">
            <Box component="div" className="w-12 h-12 xxs:w-8 xxs:h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 transition-transform hover:scale-110 duration-300">
              <img src={VoiceMakerLogo} alt="Voice Maker Logo" className="w-full h-full object-contain drop-shadow-lg" />
            </Box>
            <Typography
              variant="h3"
              className="font-display font-bold gradient-text text-2xl xxs:text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            >
              VoiceMaker
            </Typography>
          </Box>
          <Typography
            variant="body1"
            className="text-neutral-600 text-center text-sm xxs:text-xs xs:text-sm sm:text-base max-w-2xl"
          >
            Transform your text into natural-sounding speech with advanced AI voice technology
          </Typography>
        </Box>

        {/* Main Content Card with Glassmorphism */}
        <Box className="card-modern p-4 xxs:p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 backdrop-blur-sm bg-white/95 animate-scale-in">
          <Box className="flex flex-col md:flex-row md:gap-6 lg:gap-8 mb-6 xxs:mb-3 xs:mb-4 sm:mb-5 md:mb-6">
            {/* Left Section - Text Input */}
            <Box className="w-full md:w-7/12 flex flex-col">
              <Box className="relative group">
                <Box className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300" />
                <Box className="relative bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200/80 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary-300 hover:shadow-lg">
                  <Box className="p-3 xxs:p-2 xs:p-3 bg-gradient-to-r from-primary-50/50 to-secondary-50/50 border-b border-neutral-200/50">
                    <Typography
                      variant="subtitle2"
                      className="font-semibold text-neutral-700 flex items-center gap-2 text-xs xxs:text-xs sm:text-sm"
                    >
                      <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                      Enter Your Text
                    </Typography>
                  </Box>
                  <Box className="p-1">
                    <TextField
                      placeholder="Type or paste your text here..."
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      id="standard-multiline-static"
                      multiline
                      rows={16}
                      variant="standard"
                      className="w-full"
                      InputProps={{
                        disableUnderline: true,
                        classes: {
                          input: "scrollbar-custom",
                        },
                      }}
                      sx={{
                        "& .MuiInputBase-root": {
                          padding: "12px",
                          backgroundColor: "transparent",
                          fontSize: "clamp(0.875rem, 2vw, 1rem)",
                          lineHeight: 1.6,
                        },
                        "& .MuiInputBase-input": {
                          padding: "8px",
                        },
                        "& .MuiInputBase-input::placeholder": {
                          color: "#94a3b8",
                          opacity: 1,
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Box>

              <Box className="flex justify-start mt-3 xxs:mt-2 xs:mt-3">
                <Button
                  onClick={() => {
                    setText(""), handleStop();
                  }}
                  variant="outlined"
                  className="btn-hover-lift"
                  sx={{
                    borderColor: '#e2e8f0',
                    color: '#64748b',
                    textTransform: 'none',
                    fontWeight: 500,
                    borderRadius: '12px',
                    padding: '8px 20px',
                    fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                    '&:hover': {
                      borderColor: '#cbd5e1',
                      backgroundColor: '#f8fafc',
                    },
                  }}
                >
                  Clear Text
                </Button>
              </Box>
            </Box>

            {/* Right Section - Voice Settings */}
            <Box className="w-full md:w-5/12 mt-4 md:mt-0 flex flex-col">
              <Box className="relative group h-full">
                <Box className="absolute -inset-0.5 bg-gradient-to-r from-secondary-600 to-accent-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300" />
                <Box className="relative h-full bg-gradient-to-br from-white to-primary-50/30 border-2 border-primary-200/60 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <Box className="p-4 xxs:p-3 xs:p-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                    <Typography
                      variant="h6"
                      className="font-display font-semibold flex items-center gap-2 text-base xxs:text-sm xs:text-base sm:text-lg"
                    >
                      <svg className="w-5 h-5 xxs:w-4 xxs:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                      Voice Settings
                    </Typography>
                  </Box>

                  <Box className="p-4 xxs:p-2 xs:p-3 sm:p-4 space-y-4 xxs:space-y-2 xs:space-y-3 sm:space-y-4">
                    <InputSlider
                      name={"Voice Volume"}
                      id={"volume"}
                      reset={reset}
                      setReset={setReset}
                    />
                    <InputSlider
                      name={"Voice Speed"}
                      id={"speed"}
                      reset={reset}
                      setReset={setReset}
                    />
                    <InputSlider
                      name={"Voice Pitch"}
                      id={"pitch"}
                      reset={reset}
                      setReset={setReset}
                    />
                  </Box>

                  <Box className="flex gap-2 xxs:gap-1 xs:gap-2 px-4 xxs:px-2 xs:px-3 sm:px-4 pb-3 xxs:pb-2 xs:pb-3">
                    <Button
                      onClick={() => handleStop()}
                      variant="outlined"
                      className="btn-hover-lift flex-1"
                      sx={{
                        borderColor: '#e2e8f0',
                        color: '#64748b',
                        textTransform: 'none',
                        fontWeight: 500,
                        borderRadius: '10px',
                        padding: '8px 16px',
                        fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                        '&:hover': {
                          borderColor: '#cbd5e1',
                          backgroundColor: '#f8fafc',
                        },
                      }}
                    >
                      Stop
                    </Button>
                    <Button
                      onClick={() => setReset(true)}
                      variant="outlined"
                      className="btn-hover-lift flex-1"
                      sx={{
                        borderColor: '#e2e8f0',
                        color: '#64748b',
                        textTransform: 'none',
                        fontWeight: 500,
                        borderRadius: '10px',
                        padding: '8px 16px',
                        fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                        '&:hover': {
                          borderColor: '#cbd5e1',
                          backgroundColor: '#f8fafc',
                        },
                      }}
                    >
                      Reset
                    </Button>
                  </Box>

                  <Box className="px-4 xxs:px-2 xs:px-3 sm:px-4 pb-4 xxs:pb-2 xs:pb-3 sm:pb-4">
                    <Button
                      onClick={handleValidation}
                      variant="contained"
                      className="btn-hover-lift w-full"
                      sx={{
                        background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                        color: 'white',
                        textTransform: 'none',
                        fontWeight: 600,
                        borderRadius: '12px',
                        padding: '12px 24px',
                        fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                        boxShadow: '0 4px 14px rgba(139, 92, 246, 0.4)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
                          boxShadow: '0 6px 20px rgba(139, 92, 246, 0.5)',
                        },
                      }}
                    >
                      Convert to Speech
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Bottom Section - Media Player and Voice Selection */}
          <Box className="flex flex-col md:flex-row gap-4 xxs:gap-2 xs:gap-3 sm:gap-4 md:gap-6 items-center">
            <Box className="w-full md:w-7/12">
              <Box className="bg-gradient-to-r from-neutral-50 to-white border border-neutral-200/80 rounded-xl p-4 xxs:p-2 xs:p-3 sm:p-4 hover:shadow-md transition-all duration-300">
                <MediaPlayer />
              </Box>
            </Box>
            <Box className="w-full md:w-5/12">
              <VoicesDropdown />
            </Box>
          </Box>
        </Box>

        {/* Footer */}
        <Box className="text-center mt-6 xxs:mt-3 xs:mt-4 sm:mt-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Typography variant="caption" className="text-neutral-500 text-xs xxs:text-xs sm:text-sm">
            Powered by Web Speech API • Made with care
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
