 interface RouteObject {
    caseSensitive?: boolean
    children?: RouteObject[]
    element?: React.ReactNode
    path?: string
    auth?: boolean
}

export type {
    RouteObject
}
