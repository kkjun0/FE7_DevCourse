import { twMerge } from 'tailwind-merge';

export default function NotFound() {
  const isBlue = true;
  return (
    <>
      <div className="flex items-center justify-center min-h-screen gap-2">
        <button className="btn-primary">버튼</button>
        <button className="btn-primary">버튼</button>
        <button className={twMerge(`bg-amber-500`, isBlue && `bg-blue-500`)}>
          버튼
        </button>
      </div>
    </>
  );
}
