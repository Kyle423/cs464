import { IconButton } from '@mui/material';
import ShuffleIcon from '@mui/icons-material/Shuffle';

interface ShuffleButtonProps {
  onShuffle: () => void;
  disabled?: boolean;
}

export default function ShuffleButton({ onShuffle, disabled = false }: ShuffleButtonProps) {
  return (
    <IconButton
      onClick={onShuffle}
      aria-label="shuffle items"
      disabled={disabled}
      sx={{
        color: '#5a189a',
        '&:hover': { bgcolor: 'rgba(90, 24, 154, 0.1)' },
        '&:disabled': { color: 'text.disabled' },
      }}
    >
      <ShuffleIcon sx={{ fontSize: 24 }} />
    </IconButton>
  );
}
