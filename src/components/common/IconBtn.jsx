export default function IconBtn({
    text,
    onclick,
    children,
    disabled,
    outline = false,
    customClasses,
    type,
  }) {
    return (
      <button
        disabled={disabled}
        onClick={onclick}
        className={`flex items-center ${
          outline ? "border border-purple-700 bg-transparent" : "bg-purple-700"
        } cursor-pointer gap-x-2 rounded-md sm:w-18 lg:py-2 lg:px-5 sm:py-1 sm:px-2 font-semibold text-white ${customClasses}`}
        type={type}
      >
        {children ? (
          <>
            <span className={`${outline && "text-purple-700"}`}>{text}</span>
            {children}
          </>
        ) : (
          text
        )}
      </button>
    )
  }
  