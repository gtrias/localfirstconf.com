export const SpeakerBadge = () => {
  return (
    <div className="relative">
      <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute h-8 fill-current text-magenta">
        <path d="M479.2 32.8c-43.7-43.7-114.7-43.7-158.4 0l-4.7 4.7L474.5 195.9l4.7-4.7c43.7-43.7 43.7-114.7 0-158.4zM293.5 60.1l-4.7 4.7c-24.4 24.4-35.2 57.2-32.4 89L358.2 255.6c31.8 2.8 64.6-8 89-32.4l4.7-4.7L293.5 60.1zM229.1 171.7L215.8 187 7.8 427c-11 12.7-10.3 31.7 1.6 43.6l32 32c11.9 11.9 30.9 12.6 43.6 1.6L224 383.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V328.2l37-32 15.3-13.3L229.1 171.7z" />
      </svg>
      <span className="ml-1 mt-1 inline-block h-6 rounded-full bg-white/20 pl-9 pr-3">Speaker</span>
    </div>
  )
}
