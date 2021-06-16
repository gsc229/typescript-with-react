type Alias1 = string | string[] | null

type Alias2 = {a: number} & {b: number}

type Alias3<T> = T[]

// though this is possible, use interface when describing the shape of an object
type Alias4 = {
  a: number
  b: number
}

