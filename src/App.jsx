import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ModeToggle } from '@/components/mode-toggle'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'hsl(var(--background))', color: 'hsl(var(--foreground))' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">vite-react-template</h1>
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/BlueprintDevHub/vite-react-template"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md transition-colors hover:opacity-80"
              style={{ color: 'hsl(var(--foreground))' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <ModeToggle />
          </div>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <div className="flex space-x-8">
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
              <img src={viteLogo} className="h-20 w-20 hover:drop-shadow-lg transition-all" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="h-20 w-20 hover:drop-shadow-lg transition-all animate-spin" alt="React logo" />
            </a>
          </div>

          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Vite + React 19
          </h2>

          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Interactive Counter</CardTitle>
              <CardDescription>
                Click the button below to increment the counter
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <button
                onClick={() => setCount((count) => count + 1)}
                className="px-6 py-3 rounded-md font-medium transition-colors text-lg"
                style={{
                  backgroundColor: 'hsl(var(--primary))',
                  color: 'hsl(var(--primary-foreground))'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                count is {count}
              </button>
            </CardContent>
          </Card>

          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Hot Module Replacement</CardTitle>
              <CardDescription>
                Test the development experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Edit <code className="px-2 py-1 rounded text-sm font-mono" style={{ backgroundColor: 'hsl(var(--muted))' }}>src/App.jsx</code> and save to test HMR
              </p>
            </CardContent>
          </Card>

          <p className="text-center max-w-md" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Click on the Vite and React logos to learn more. Use the theme toggle in the top right to switch between light and dark modes.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
