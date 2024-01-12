"use client"

import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const toggle = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light");
    }
  }

  return (
    <div 
      className="w-11 h-6 rounded-full flex 
        justify-between p-1 items-center
        border border-slate-800 dark:border-white relative cursor-pointer"
      onClick={() => toggle()}
    >
      <div className="text-sm">🌙</div>
      <div className="text-sm">🔆</div>
      <div 
        className="w-4 h-4 rounded-full absolute bg-[#53c28b]"
        style={theme === 'light' ? { left: "2px" }: {right: "2px"}} />
    </div>
  )
}