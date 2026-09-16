function applyTheme(next) {
  document.documentElement.setAttribute("data-theme", next)
  try {
    localStorage.setItem("nishant-theme", next)
  } catch {
    /* ignore */
  }
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) {
    meta.setAttribute("content", next === "light" ? "#F5F5F7" : "#0D0D0D")
  }
}

function originFromEvent(event) {
  const rect = event.currentTarget.getBoundingClientRect()
  return {
    x: event.clientX || rect.left + rect.width / 2,
    y: event.clientY || rect.top + rect.height / 2,
  }
}

async function revealTheme(next, origin) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const canReveal = typeof document.startViewTransition === "function"

  if (reduced || !canReveal) {
    applyTheme(next)
    return
  }

  const radius = Math.hypot(
    Math.max(origin.x, window.innerWidth - origin.x),
    Math.max(origin.y, window.innerHeight - origin.y),
  )

  try {
    const transition = document.startViewTransition(() => applyTheme(next))
    await transition.ready
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${origin.x}px ${origin.y}px)`,
          `circle(${radius}px at ${origin.x}px ${origin.y}px)`,
        ],
      },
      {
        duration: 640,
        easing: "cubic-bezier(0.45, 0, 0.15, 1)",
        pseudoElement: "::view-transition-new(root)",
      },
    )
  } catch {
    applyTheme(next)
  }
}

export default function ThemeToggle({ className = "" }) {
  return (
    <button
      type="button"
      aria-label="Toggle colour theme"
      className={`theme-toggle ${className}`.trim()}
      onClick={(event) => {
        const current =
          document.documentElement.getAttribute("data-theme") === "light"
            ? "light"
            : "dark"
        void revealTheme(
          current === "dark" ? "light" : "dark",
          originFromEvent(event),
        )
      }}
    >
      <svg
        className="theme-icon-sun"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      <svg
        className="theme-icon-moon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        aria-hidden
      >
        <path d="M21 14.3A8.5 8.5 0 1 1 9.7 3 7 7 0 0 0 21 14.3z" />
      </svg>
    </button>
  )
}