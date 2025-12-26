import { Select, MenuItem, InputLabel, FormControl, Box, Typography } from "@mui/material";
import { useGlobalContext } from "../../contextApi/contextApi";

const VoicesDropdown = () => {
  const { selectedVoice, handleChange } = useGlobalContext();

  return (
    <Box className="relative group">
      {/* Gradient glow effect */}
      <Box className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300" />

      <Box className="relative bg-gradient-to-br from-white to-primary-50/30 border-2 border-primary-200/60 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
        {/* Header */}
        <Box className="p-3 xxs:p-2 xs:p-3 bg-gradient-to-r from-primary-50/50 to-secondary-50/50 border-b border-neutral-200/50">
          <Box className="flex items-center gap-2">
            <Box className="p-1.5 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500">
              <svg className="w-4 h-4 xxs:w-3 xxs:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </Box>
            <Typography
              variant="subtitle2"
              className="font-semibold text-neutral-700"
              sx={{
                fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                fontWeight: 600,
              }}
            >
              Select Voice
            </Typography>
          </Box>
        </Box>

        {/* Dropdown */}
        <Box className="p-3 xxs:p-2 xs:p-3">
          <FormControl fullWidth className="w-full">
            <InputLabel
              id="voice-select-label"
              sx={{
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                fontWeight: 500,
                color: '#64748b',
                '&.Mui-focused': {
                  color: '#8b5cf6',
                },
              }}
            >
              Choose a voice
            </InputLabel>
            <Select
              labelId="voice-select-label"
              id="voice-select"
              label="Choose a voice"
              value={selectedVoice}
              onChange={handleChange}
              sx={{
                borderRadius: '10px',
                backgroundColor: 'rgba(248, 250, 252, 0.8)',
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#e2e8f0',
                  borderWidth: '2px',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#cbd5e1',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#8b5cf6',
                  borderWidth: '2px',
                },
                '& .MuiSelect-select': {
                  padding: '12px 14px',
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    borderRadius: '12px',
                    marginTop: '8px',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                    maxHeight: '300px',
                    '& .MuiList-root': {
                      padding: '8px',
                    },
                    '& .MuiMenuItem-root': {
                      borderRadius: '8px',
                      margin: '2px 0',
                      fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
                      padding: '10px 14px',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(139, 92, 246, 0.08)',
                      },
                      '&.Mui-selected': {
                        backgroundColor: 'rgba(139, 92, 246, 0.12)',
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: 'rgba(139, 92, 246, 0.16)',
                        },
                      },
                    },
                  },
                },
              }}
            >
              {window.speechSynthesis.getVoices()?.length > 0 ? (
                window.speechSynthesis.getVoices()?.map((voice) => (
                  <MenuItem key={voice?.name} value={voice?.name}>
                    <Box className="flex flex-col">
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
                          fontWeight: 500,
                        }}
                      >
                        {voice?.name}
                      </Typography>
                      {voice?.lang && (
                        <Typography
                          variant="caption"
                          sx={{
                            color: '#94a3b8',
                            fontSize: 'clamp(0.75rem, 1.8vw, 0.8rem)',
                          }}
                        >
                          {voice?.lang}
                        </Typography>
                      )}
                    </Box>
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>
                  <Typography variant="body2" className="text-neutral-500">
                    No voices available
                  </Typography>
                </MenuItem>
              )}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default VoicesDropdown;
