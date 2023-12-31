export function Logo() {
  return (
    <strong className="flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
      <svg
        width={38}
        height={38}
        viewBox="0 0 211 212"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M201.975.805H8.415A8.416 8.416 0 000 9.221v193.558a8.416 8.416 0 008.416 8.416h193.559a8.416 8.416 0 008.415-8.416V9.221a8.416 8.416 0 00-8.415-8.416z"
          fill="#FBEAEB"
        />
        <path
          d="M62.106 151.862H49.051v-93.2h56.219v11.17H62.106V97.94h38.326v11.019H62.106v42.902zm70.059-91.575v21.647h26.485v10.497h-26.485v32.274c0 3.487.268 6.376.803 8.667.536 2.291 1.345 4.084 2.428 5.379 1.071 1.295 2.416 2.216 4.035 2.764 1.606.535 3.486.803 5.64.803 3.761 0 6.786-.429 9.077-1.289 2.292-.846 3.885-1.45 4.782-1.811l2.409 10.366c-1.257.622-3.455 1.407-6.593 2.353-3.138.934-6.724 1.401-10.758 1.401-4.744 0-8.666-.604-11.767-1.812-3.088-1.208-5.572-3.026-7.452-5.454-1.88-2.415-3.206-5.391-3.978-8.928-.76-3.548-1.14-7.651-1.14-12.308v-62.4l12.514-2.149z"
          fill="#2F3C7E"
        />
      </svg>
      <span>Fasttrack</span>
    </strong>
  )
}
