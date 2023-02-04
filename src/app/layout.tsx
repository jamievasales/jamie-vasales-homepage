import './globals.css'

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head><title>La la la Jamie&apos world, Jamie&apos world</title></head>
        <body>
        <p>test</p>
        {children}
        </body>
        </html>
    )
}
