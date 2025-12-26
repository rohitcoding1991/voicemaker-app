import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import PropTypes from "prop-types";
import { useGlobalContext } from "../../contextApi/contextApi";

// Modern styled Input component with glassmorphism
const Input = styled(MuiInput)(() => ({
  width: '56px',
  padding: '6px 10px',
  borderRadius: '8px',
  backgroundColor: 'rgba(139, 92, 246, 0.05)',
  border: '1px solid rgba(139, 92, 246, 0.2)',
  fontSize: '0.875rem',
  fontWeight: 500,
  color: '#475569',
  transition: 'all 0.2s ease',
  '&.MuiInput-underline:before': {
    borderBottom: 'none',
  },
  '&.MuiInput-underline:after': {
    borderBottom: 'none',
  },
  '&:hover': {
    backgroundColor: 'rgba(139, 92, 246, 0.08)',
    borderColor: 'rgba(139, 92, 246, 0.3)',
  },
  '&.Mui-focused': {
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    borderColor: 'rgba(139, 92, 246, 0.4)',
    boxShadow: '0 0 0 3px rgba(139, 92, 246, 0.1)',
  },
  '& input': {
    textAlign: 'center',
    padding: '2px 0',
  },
}));

// Modern styled Slider with gradient track
const ModernSlider = styled(Slider)(() => ({
  color: '#8b5cf6',
  height: 6,
  padding: '15px 0',
  '& .MuiSlider-track': {
    border: 'none',
    background: 'linear-gradient(90deg, #8b5cf6 0%, #3b82f6 100%)',
    height: 6,
  },
  '& .MuiSlider-rail': {
    backgroundColor: '#e2e8f0',
    opacity: 1,
    height: 6,
  },
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '3px solid #8b5cf6',
    boxShadow: '0 3px 12px rgba(139, 92, 246, 0.3)',
    transition: 'all 0.2s ease',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: '0 4px 16px rgba(139, 92, 246, 0.4)',
      transform: 'scale(1.1)',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 11,
    background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
    padding: '4px 8px',
    borderRadius: '6px',
    boxShadow: '0 2px 8px rgba(139, 92, 246, 0.3)',
  },
}));

export default function InputSlider({ name, id, reset, setReset }) {
  const { setSpeed, setPitch, setVolume } = useGlobalContext();
  const [value, setValue] = React.useState(1);

  React.useEffect(() => {
    if (reset) {
      setValue(1);
      setSpeed(1);
      setPitch(1);
      setVolume(1);
      setReset("false");
    }
  }, [reset]);

  const handleSliderChange = (e, newValue) => {
    setValue(newValue);
    if (id === "speed") {
      setSpeed(newValue);
    } else if (id === "pitch") {
      setPitch(newValue);
    } else if (id === "volume") {
      setVolume(newValue);
    }
  };

  // Get appropriate icon based on slider type
  const getIcon = () => {
    switch(id) {
      case "volume":
        return (
          <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        );
      case "speed":
        return (
          <svg className="w-4 h-4 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case "pitch":
        return (
          <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <Box className="group">
      <Box className="flex items-center gap-2 mb-2">
        <Box className="p-1.5 rounded-lg bg-gradient-to-br from-primary-50 to-secondary-50 group-hover:shadow-md transition-all duration-200">
          {getIcon()}
        </Box>
        <Typography
          id="input-slider"
          className="text-neutral-700 font-medium text-sm"
          sx={{
            fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
            fontWeight: 500,
          }}
        >
          {name}
        </Typography>
      </Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <ModernSlider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            step={0.1}
            min={0.5}
            max={2}
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            inputProps={{
              type: "number",
              "aria-labelledby": "input-slider",
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

InputSlider.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reset: PropTypes.bool.isRequired,
  setReset: PropTypes.func.isRequired,
};
