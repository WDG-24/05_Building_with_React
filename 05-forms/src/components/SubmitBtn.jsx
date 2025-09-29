import { useFormStatus } from 'react-dom';

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      disabled={pending}
      className={`w-full py-2 rounded text-white ${
        pending ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
      }`}
    >
      {pending ? 'Sending message...' : 'Send Message'}
    </button>
  );
}
