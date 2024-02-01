import Image from "next/image"

export type ProfilePopoverProps = {}

export default function ProfilePopover({}: ProfilePopoverProps) {
  return (
    <div className="px-2 py-2 min-w-72 flex items-center gap-[10px] bg-slate-100/40 hover:bg-violet-200/50 active:bg-violet-300/50 border border-slate-200 transition rounded-xl select-none">
      <Image
        className="w-8 h-8 rounded-md"
        src="/avatar.png"
        alt="Avater"
        width={128}
        height={128}
      />
      <div className="">
        <div className="text-[10px] leading-4 font-medium">Welcome back,</div>
        <div className="text-[17px] leading-5 font-medium">Akshita Patel</div>
      </div>
      <svg
      className="ml-auto"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.46967 7.96967C4.73594 7.7034 5.1526 7.6792 5.44621 7.89705L5.53033 7.96967L12 14.439L18.4697 7.96967C18.7359 7.7034 19.1526 7.6792 19.4462 7.89705L19.5303 7.96967C19.7966 8.23594 19.8208 8.6526 19.6029 8.94621L19.5303 9.03033L12.5303 16.0303C12.2641 16.2966 11.8474 16.3208 11.5538 16.1029L11.4697 16.0303L4.46967 9.03033C4.17678 8.73744 4.17678 8.26256 4.46967 7.96967Z"
          fill="#1E2875"
        />
      </svg>
    </div>
  )
}
