// src/components/common/Alert.tsx
interface AlertProps {
  type: 'success' | 'error';
  message: string;
  onClose?: () => void;
}

export default function Alert({ type, message, onClose }: AlertProps) {
  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded-xl shadow-lg ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      } text-white`}
    >
      {message}
      {onClose && (
        <button onClick={onClose} className="ml-2">
          ×
        </button>
      )}
    </div>
  );
}
