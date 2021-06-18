type Properties = "propA" | "propB"

type MyMappedType<Properties extends string | number | symbol> = {
  [P in Properties]: P
}

type MyNewType = MyMappedType<"propA" | "propB">

/* ============================================================= */

type MyMappedType2<T> = {
  [P in keyof T]: T[P]
  // can also do: 
  // readonly [P in keyof T]: T[P]
  // [P in keyof T]?: T[P]  --> you can make it optional
  // [P in keyof T]: T[P] | null --> make it nullable
}

type MyNewType2 = MyMappedType2<{ a: "a"; b: "b"}>

// Other typescript types, Pick and Record use Mapped types behind the scenes
// Recreate types using maptypes

type Pick1<T, Properties extends keyof T> = {
  [P in Properties]: T[P]
}

type MyNewType3 = Pick1<{ a: 'a'; b: 'b'; c: 'c'}, 'a' | 'c'> // new property with only 'a' and 'c' --> note you can use union "|" 

/* ======================================================================================================= */

type Record1<K extends keyof any, T> = {
  [P in K]: T
}

const someRecord: Record1<string, number> = {}
someRecord.apples = 10
someRecord.orages = 8

/* Below same as above */

const someRecord2: Record2 = {}
someRecord.apples = 10
someRecord.orages = 8

interface Record2 {
  [key: string]: number
}