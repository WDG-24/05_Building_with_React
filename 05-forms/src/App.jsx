/** biome-ignore-all lint/correctness/useUniqueElementIds: <not now> */
import { useActionState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback.jsx';
import SubmitBtn from './components/SubmitBtn.jsx';
import { sleep, validate } from './utils/index.js';

async function action(prevState, formData) {
  console.log(prevState);
  const data = Object.fromEntries(formData);
  const validationErrors = validate(data);

  if (Object.keys(validationErrors).length === 0) {
    await sleep(2000); // Simulate network delay
    console.log('Submitted:', data);
    alert('Form submitted successfully!');

    return {};
  }
  // throw new Error('Invalid Form');
  return {
    errors: validationErrors,
    input: data,
  };
}

export default function App() {
  const [state, formAction, isPending] = useActionState(action, {});

  return (
    <main className='min-h-screen bg-gray-900 p-8 font-sans'>
      <div className='max-w-xl mx-auto bg-gray-950 p-6 rounded-lg shadow space-y-6'>
        <h2 className='text-2xl font-bold text-center text-gray-200'>Contact Us</h2>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <form action={formAction} className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-200' htmlFor='name'>
                Name
              </label>
              <input
                defaultValue={state.input?.name}
                name='name'
                id='name'
                disabled={isPending}
                className='w-full mt-1 border border-gray-300 rounded px-3 py-2'
                placeholder='Leia Organa'
              />
              {state.errors?.name && <p className='text-sm text-red-600 mt-1'>{state.errors.name}</p>}
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700' htmlFor='email'>
                Email
              </label>
              <input
                defaultValue={state.input?.email}
                name='email'
                id='email'
                disabled={isPending}
                className='w-full mt-1 border border-gray-300 rounded px-3 py-2'
                placeholder='leia@rebellion.org'
              />
              {state.errors?.email && <p className='text-sm text-red-600 mt-1'>{state.errors.email}</p>}
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700' htmlFor='message'>
                Message
              </label>
              <textarea
                defaultValue={state.input?.message}
                name='message'
                id='message'
                rows={4}
                disabled={isPending}
                className='w-full mt-1 border border-gray-300 rounded px-3 py-2'
                placeholder='Tell us how we can help...'
              />
              {state.errors?.message && <p className='text-sm text-red-600 mt-1'>{state.errors.message}</p>}
            </div>
            <SubmitBtn />
          </form>
        </ErrorBoundary>
      </div>
    </main>
  );
}
