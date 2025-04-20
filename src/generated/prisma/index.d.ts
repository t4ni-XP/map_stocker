
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model MapLocation
 * 
 */
export type MapLocation = $Result.DefaultSelection<Prisma.$MapLocationPayload>
/**
 * Model MapImage
 * 
 */
export type MapImage = $Result.DefaultSelection<Prisma.$MapImagePayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model MapImageTag
 * 
 */
export type MapImageTag = $Result.DefaultSelection<Prisma.$MapImageTagPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapLocation`: Exposes CRUD operations for the **MapLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MapLocations
    * const mapLocations = await prisma.mapLocation.findMany()
    * ```
    */
  get mapLocation(): Prisma.MapLocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapImage`: Exposes CRUD operations for the **MapImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MapImages
    * const mapImages = await prisma.mapImage.findMany()
    * ```
    */
  get mapImage(): Prisma.MapImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapImageTag`: Exposes CRUD operations for the **MapImageTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MapImageTags
    * const mapImageTags = await prisma.mapImageTag.findMany()
    * ```
    */
  get mapImageTag(): Prisma.MapImageTagDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    MapLocation: 'MapLocation',
    MapImage: 'MapImage',
    Tag: 'Tag',
    MapImageTag: 'MapImageTag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "mapLocation" | "mapImage" | "tag" | "mapImageTag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MapLocation: {
        payload: Prisma.$MapLocationPayload<ExtArgs>
        fields: Prisma.MapLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapLocationPayload>
          }
          findFirst: {
            args: Prisma.MapLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapLocationPayload>
          }
          findMany: {
            args: Prisma.MapLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapLocationPayload>[]
          }
          create: {
            args: Prisma.MapLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapLocationPayload>
          }
          createMany: {
            args: Prisma.MapLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MapLocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapLocationPayload>[]
          }
          delete: {
            args: Prisma.MapLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapLocationPayload>
          }
          update: {
            args: Prisma.MapLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapLocationPayload>
          }
          deleteMany: {
            args: Prisma.MapLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MapLocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapLocationPayload>[]
          }
          upsert: {
            args: Prisma.MapLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapLocationPayload>
          }
          aggregate: {
            args: Prisma.MapLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapLocation>
          }
          groupBy: {
            args: Prisma.MapLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapLocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MapLocationCountArgs<ExtArgs>
            result: $Utils.Optional<MapLocationCountAggregateOutputType> | number
          }
        }
      }
      MapImage: {
        payload: Prisma.$MapImagePayload<ExtArgs>
        fields: Prisma.MapImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImagePayload>
          }
          findFirst: {
            args: Prisma.MapImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImagePayload>
          }
          findMany: {
            args: Prisma.MapImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImagePayload>[]
          }
          create: {
            args: Prisma.MapImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImagePayload>
          }
          createMany: {
            args: Prisma.MapImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MapImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImagePayload>[]
          }
          delete: {
            args: Prisma.MapImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImagePayload>
          }
          update: {
            args: Prisma.MapImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImagePayload>
          }
          deleteMany: {
            args: Prisma.MapImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MapImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImagePayload>[]
          }
          upsert: {
            args: Prisma.MapImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImagePayload>
          }
          aggregate: {
            args: Prisma.MapImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapImage>
          }
          groupBy: {
            args: Prisma.MapImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MapImageCountArgs<ExtArgs>
            result: $Utils.Optional<MapImageCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      MapImageTag: {
        payload: Prisma.$MapImageTagPayload<ExtArgs>
        fields: Prisma.MapImageTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapImageTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImageTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapImageTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImageTagPayload>
          }
          findFirst: {
            args: Prisma.MapImageTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImageTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapImageTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImageTagPayload>
          }
          findMany: {
            args: Prisma.MapImageTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImageTagPayload>[]
          }
          create: {
            args: Prisma.MapImageTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImageTagPayload>
          }
          createMany: {
            args: Prisma.MapImageTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MapImageTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImageTagPayload>[]
          }
          delete: {
            args: Prisma.MapImageTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImageTagPayload>
          }
          update: {
            args: Prisma.MapImageTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImageTagPayload>
          }
          deleteMany: {
            args: Prisma.MapImageTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapImageTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MapImageTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImageTagPayload>[]
          }
          upsert: {
            args: Prisma.MapImageTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapImageTagPayload>
          }
          aggregate: {
            args: Prisma.MapImageTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapImageTag>
          }
          groupBy: {
            args: Prisma.MapImageTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapImageTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.MapImageTagCountArgs<ExtArgs>
            result: $Utils.Optional<MapImageTagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    mapLocation?: MapLocationOmit
    mapImage?: MapImageOmit
    tag?: TagOmit
    mapImageTag?: MapImageTagOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    mapLocations: number
    mapImages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mapLocations?: boolean | UserCountOutputTypeCountMapLocationsArgs
    mapImages?: boolean | UserCountOutputTypeCountMapImagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMapLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapLocationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMapImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapImageWhereInput
  }


  /**
   * Count Type MapImageCountOutputType
   */

  export type MapImageCountOutputType = {
    tags: number
  }

  export type MapImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | MapImageCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * MapImageCountOutputType without action
   */
  export type MapImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImageCountOutputType
     */
    select?: MapImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MapImageCountOutputType without action
   */
  export type MapImageCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapImageTagWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    MapImageTag: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MapImageTag?: boolean | TagCountOutputTypeCountMapImageTagArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountMapImageTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapImageTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    googleId: string | null
    email: string | null
    name: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    googleId: string | null
    email: string | null
    name: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    googleId: number
    email: number
    name: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    googleId?: true
    email?: true
    name?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    googleId?: true
    email?: true
    name?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    googleId?: true
    email?: true
    name?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    googleId: string
    email: string
    name: string | null
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    role: $Enums.Role | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleId?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    mapLocations?: boolean | User$mapLocationsArgs<ExtArgs>
    mapImages?: boolean | User$mapImagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleId?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleId?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    googleId?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "googleId" | "email" | "name" | "avatarUrl" | "createdAt" | "updatedAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mapLocations?: boolean | User$mapLocationsArgs<ExtArgs>
    mapImages?: boolean | User$mapImagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      mapLocations: Prisma.$MapLocationPayload<ExtArgs>[]
      mapImages: Prisma.$MapImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      googleId: string
      email: string
      name: string | null
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
      role: $Enums.Role | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mapLocations<T extends User$mapLocationsArgs<ExtArgs> = {}>(args?: Subset<T, User$mapLocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mapImages<T extends User$mapImagesArgs<ExtArgs> = {}>(args?: Subset<T, User$mapImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.mapLocations
   */
  export type User$mapLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapLocation
     */
    select?: MapLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapLocation
     */
    omit?: MapLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapLocationInclude<ExtArgs> | null
    where?: MapLocationWhereInput
    orderBy?: MapLocationOrderByWithRelationInput | MapLocationOrderByWithRelationInput[]
    cursor?: MapLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapLocationScalarFieldEnum | MapLocationScalarFieldEnum[]
  }

  /**
   * User.mapImages
   */
  export type User$mapImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImage
     */
    select?: MapImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImage
     */
    omit?: MapImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageInclude<ExtArgs> | null
    where?: MapImageWhereInput
    orderBy?: MapImageOrderByWithRelationInput | MapImageOrderByWithRelationInput[]
    cursor?: MapImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapImageScalarFieldEnum | MapImageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model MapLocation
   */

  export type AggregateMapLocation = {
    _count: MapLocationCountAggregateOutputType | null
    _avg: MapLocationAvgAggregateOutputType | null
    _sum: MapLocationSumAggregateOutputType | null
    _min: MapLocationMinAggregateOutputType | null
    _max: MapLocationMaxAggregateOutputType | null
  }

  export type MapLocationAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type MapLocationSumAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type MapLocationMinAggregateOutputType = {
    id: string | null
    name: string | null
    lat: number | null
    lng: number | null
    description: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type MapLocationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    lat: number | null
    lng: number | null
    description: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type MapLocationCountAggregateOutputType = {
    id: number
    name: number
    lat: number
    lng: number
    description: number
    userId: number
    createdAt: number
    _all: number
  }


  export type MapLocationAvgAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type MapLocationSumAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type MapLocationMinAggregateInputType = {
    id?: true
    name?: true
    lat?: true
    lng?: true
    description?: true
    userId?: true
    createdAt?: true
  }

  export type MapLocationMaxAggregateInputType = {
    id?: true
    name?: true
    lat?: true
    lng?: true
    description?: true
    userId?: true
    createdAt?: true
  }

  export type MapLocationCountAggregateInputType = {
    id?: true
    name?: true
    lat?: true
    lng?: true
    description?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type MapLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapLocation to aggregate.
     */
    where?: MapLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapLocations to fetch.
     */
    orderBy?: MapLocationOrderByWithRelationInput | MapLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MapLocations
    **/
    _count?: true | MapLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MapLocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MapLocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapLocationMaxAggregateInputType
  }

  export type GetMapLocationAggregateType<T extends MapLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateMapLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapLocation[P]>
      : GetScalarType<T[P], AggregateMapLocation[P]>
  }




  export type MapLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapLocationWhereInput
    orderBy?: MapLocationOrderByWithAggregationInput | MapLocationOrderByWithAggregationInput[]
    by: MapLocationScalarFieldEnum[] | MapLocationScalarFieldEnum
    having?: MapLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapLocationCountAggregateInputType | true
    _avg?: MapLocationAvgAggregateInputType
    _sum?: MapLocationSumAggregateInputType
    _min?: MapLocationMinAggregateInputType
    _max?: MapLocationMaxAggregateInputType
  }

  export type MapLocationGroupByOutputType = {
    id: string
    name: string
    lat: number
    lng: number
    description: string | null
    userId: string
    createdAt: Date
    _count: MapLocationCountAggregateOutputType | null
    _avg: MapLocationAvgAggregateOutputType | null
    _sum: MapLocationSumAggregateOutputType | null
    _min: MapLocationMinAggregateOutputType | null
    _max: MapLocationMaxAggregateOutputType | null
  }

  type GetMapLocationGroupByPayload<T extends MapLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapLocationGroupByOutputType[P]>
            : GetScalarType<T[P], MapLocationGroupByOutputType[P]>
        }
      >
    >


  export type MapLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lat?: boolean
    lng?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapLocation"]>

  export type MapLocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lat?: boolean
    lng?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapLocation"]>

  export type MapLocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lat?: boolean
    lng?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapLocation"]>

  export type MapLocationSelectScalar = {
    id?: boolean
    name?: boolean
    lat?: boolean
    lng?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type MapLocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lat" | "lng" | "description" | "userId" | "createdAt", ExtArgs["result"]["mapLocation"]>
  export type MapLocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MapLocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MapLocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MapLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MapLocation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      lat: number
      lng: number
      description: string | null
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["mapLocation"]>
    composites: {}
  }

  type MapLocationGetPayload<S extends boolean | null | undefined | MapLocationDefaultArgs> = $Result.GetResult<Prisma.$MapLocationPayload, S>

  type MapLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapLocationCountAggregateInputType | true
    }

  export interface MapLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MapLocation'], meta: { name: 'MapLocation' } }
    /**
     * Find zero or one MapLocation that matches the filter.
     * @param {MapLocationFindUniqueArgs} args - Arguments to find a MapLocation
     * @example
     * // Get one MapLocation
     * const mapLocation = await prisma.mapLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapLocationFindUniqueArgs>(args: SelectSubset<T, MapLocationFindUniqueArgs<ExtArgs>>): Prisma__MapLocationClient<$Result.GetResult<Prisma.$MapLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MapLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapLocationFindUniqueOrThrowArgs} args - Arguments to find a MapLocation
     * @example
     * // Get one MapLocation
     * const mapLocation = await prisma.mapLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, MapLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapLocationClient<$Result.GetResult<Prisma.$MapLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapLocationFindFirstArgs} args - Arguments to find a MapLocation
     * @example
     * // Get one MapLocation
     * const mapLocation = await prisma.mapLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapLocationFindFirstArgs>(args?: SelectSubset<T, MapLocationFindFirstArgs<ExtArgs>>): Prisma__MapLocationClient<$Result.GetResult<Prisma.$MapLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapLocationFindFirstOrThrowArgs} args - Arguments to find a MapLocation
     * @example
     * // Get one MapLocation
     * const mapLocation = await prisma.mapLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, MapLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapLocationClient<$Result.GetResult<Prisma.$MapLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MapLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MapLocations
     * const mapLocations = await prisma.mapLocation.findMany()
     * 
     * // Get first 10 MapLocations
     * const mapLocations = await prisma.mapLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapLocationWithIdOnly = await prisma.mapLocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapLocationFindManyArgs>(args?: SelectSubset<T, MapLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MapLocation.
     * @param {MapLocationCreateArgs} args - Arguments to create a MapLocation.
     * @example
     * // Create one MapLocation
     * const MapLocation = await prisma.mapLocation.create({
     *   data: {
     *     // ... data to create a MapLocation
     *   }
     * })
     * 
     */
    create<T extends MapLocationCreateArgs>(args: SelectSubset<T, MapLocationCreateArgs<ExtArgs>>): Prisma__MapLocationClient<$Result.GetResult<Prisma.$MapLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MapLocations.
     * @param {MapLocationCreateManyArgs} args - Arguments to create many MapLocations.
     * @example
     * // Create many MapLocations
     * const mapLocation = await prisma.mapLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapLocationCreateManyArgs>(args?: SelectSubset<T, MapLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MapLocations and returns the data saved in the database.
     * @param {MapLocationCreateManyAndReturnArgs} args - Arguments to create many MapLocations.
     * @example
     * // Create many MapLocations
     * const mapLocation = await prisma.mapLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MapLocations and only return the `id`
     * const mapLocationWithIdOnly = await prisma.mapLocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MapLocationCreateManyAndReturnArgs>(args?: SelectSubset<T, MapLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapLocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MapLocation.
     * @param {MapLocationDeleteArgs} args - Arguments to delete one MapLocation.
     * @example
     * // Delete one MapLocation
     * const MapLocation = await prisma.mapLocation.delete({
     *   where: {
     *     // ... filter to delete one MapLocation
     *   }
     * })
     * 
     */
    delete<T extends MapLocationDeleteArgs>(args: SelectSubset<T, MapLocationDeleteArgs<ExtArgs>>): Prisma__MapLocationClient<$Result.GetResult<Prisma.$MapLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MapLocation.
     * @param {MapLocationUpdateArgs} args - Arguments to update one MapLocation.
     * @example
     * // Update one MapLocation
     * const mapLocation = await prisma.mapLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapLocationUpdateArgs>(args: SelectSubset<T, MapLocationUpdateArgs<ExtArgs>>): Prisma__MapLocationClient<$Result.GetResult<Prisma.$MapLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MapLocations.
     * @param {MapLocationDeleteManyArgs} args - Arguments to filter MapLocations to delete.
     * @example
     * // Delete a few MapLocations
     * const { count } = await prisma.mapLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapLocationDeleteManyArgs>(args?: SelectSubset<T, MapLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MapLocations
     * const mapLocation = await prisma.mapLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapLocationUpdateManyArgs>(args: SelectSubset<T, MapLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapLocations and returns the data updated in the database.
     * @param {MapLocationUpdateManyAndReturnArgs} args - Arguments to update many MapLocations.
     * @example
     * // Update many MapLocations
     * const mapLocation = await prisma.mapLocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MapLocations and only return the `id`
     * const mapLocationWithIdOnly = await prisma.mapLocation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MapLocationUpdateManyAndReturnArgs>(args: SelectSubset<T, MapLocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapLocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MapLocation.
     * @param {MapLocationUpsertArgs} args - Arguments to update or create a MapLocation.
     * @example
     * // Update or create a MapLocation
     * const mapLocation = await prisma.mapLocation.upsert({
     *   create: {
     *     // ... data to create a MapLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MapLocation we want to update
     *   }
     * })
     */
    upsert<T extends MapLocationUpsertArgs>(args: SelectSubset<T, MapLocationUpsertArgs<ExtArgs>>): Prisma__MapLocationClient<$Result.GetResult<Prisma.$MapLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MapLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapLocationCountArgs} args - Arguments to filter MapLocations to count.
     * @example
     * // Count the number of MapLocations
     * const count = await prisma.mapLocation.count({
     *   where: {
     *     // ... the filter for the MapLocations we want to count
     *   }
     * })
    **/
    count<T extends MapLocationCountArgs>(
      args?: Subset<T, MapLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MapLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MapLocationAggregateArgs>(args: Subset<T, MapLocationAggregateArgs>): Prisma.PrismaPromise<GetMapLocationAggregateType<T>>

    /**
     * Group by MapLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapLocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MapLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapLocationGroupByArgs['orderBy'] }
        : { orderBy?: MapLocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MapLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MapLocation model
   */
  readonly fields: MapLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MapLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MapLocation model
   */
  interface MapLocationFieldRefs {
    readonly id: FieldRef<"MapLocation", 'String'>
    readonly name: FieldRef<"MapLocation", 'String'>
    readonly lat: FieldRef<"MapLocation", 'Float'>
    readonly lng: FieldRef<"MapLocation", 'Float'>
    readonly description: FieldRef<"MapLocation", 'String'>
    readonly userId: FieldRef<"MapLocation", 'String'>
    readonly createdAt: FieldRef<"MapLocation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MapLocation findUnique
   */
  export type MapLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapLocation
     */
    select?: MapLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapLocation
     */
    omit?: MapLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapLocationInclude<ExtArgs> | null
    /**
     * Filter, which MapLocation to fetch.
     */
    where: MapLocationWhereUniqueInput
  }

  /**
   * MapLocation findUniqueOrThrow
   */
  export type MapLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapLocation
     */
    select?: MapLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapLocation
     */
    omit?: MapLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapLocationInclude<ExtArgs> | null
    /**
     * Filter, which MapLocation to fetch.
     */
    where: MapLocationWhereUniqueInput
  }

  /**
   * MapLocation findFirst
   */
  export type MapLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapLocation
     */
    select?: MapLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapLocation
     */
    omit?: MapLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapLocationInclude<ExtArgs> | null
    /**
     * Filter, which MapLocation to fetch.
     */
    where?: MapLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapLocations to fetch.
     */
    orderBy?: MapLocationOrderByWithRelationInput | MapLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapLocations.
     */
    cursor?: MapLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapLocations.
     */
    distinct?: MapLocationScalarFieldEnum | MapLocationScalarFieldEnum[]
  }

  /**
   * MapLocation findFirstOrThrow
   */
  export type MapLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapLocation
     */
    select?: MapLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapLocation
     */
    omit?: MapLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapLocationInclude<ExtArgs> | null
    /**
     * Filter, which MapLocation to fetch.
     */
    where?: MapLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapLocations to fetch.
     */
    orderBy?: MapLocationOrderByWithRelationInput | MapLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapLocations.
     */
    cursor?: MapLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapLocations.
     */
    distinct?: MapLocationScalarFieldEnum | MapLocationScalarFieldEnum[]
  }

  /**
   * MapLocation findMany
   */
  export type MapLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapLocation
     */
    select?: MapLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapLocation
     */
    omit?: MapLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapLocationInclude<ExtArgs> | null
    /**
     * Filter, which MapLocations to fetch.
     */
    where?: MapLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapLocations to fetch.
     */
    orderBy?: MapLocationOrderByWithRelationInput | MapLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MapLocations.
     */
    cursor?: MapLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapLocations.
     */
    skip?: number
    distinct?: MapLocationScalarFieldEnum | MapLocationScalarFieldEnum[]
  }

  /**
   * MapLocation create
   */
  export type MapLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapLocation
     */
    select?: MapLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapLocation
     */
    omit?: MapLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapLocationInclude<ExtArgs> | null
    /**
     * The data needed to create a MapLocation.
     */
    data: XOR<MapLocationCreateInput, MapLocationUncheckedCreateInput>
  }

  /**
   * MapLocation createMany
   */
  export type MapLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MapLocations.
     */
    data: MapLocationCreateManyInput | MapLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MapLocation createManyAndReturn
   */
  export type MapLocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapLocation
     */
    select?: MapLocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapLocation
     */
    omit?: MapLocationOmit<ExtArgs> | null
    /**
     * The data used to create many MapLocations.
     */
    data: MapLocationCreateManyInput | MapLocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapLocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapLocation update
   */
  export type MapLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapLocation
     */
    select?: MapLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapLocation
     */
    omit?: MapLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapLocationInclude<ExtArgs> | null
    /**
     * The data needed to update a MapLocation.
     */
    data: XOR<MapLocationUpdateInput, MapLocationUncheckedUpdateInput>
    /**
     * Choose, which MapLocation to update.
     */
    where: MapLocationWhereUniqueInput
  }

  /**
   * MapLocation updateMany
   */
  export type MapLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MapLocations.
     */
    data: XOR<MapLocationUpdateManyMutationInput, MapLocationUncheckedUpdateManyInput>
    /**
     * Filter which MapLocations to update
     */
    where?: MapLocationWhereInput
    /**
     * Limit how many MapLocations to update.
     */
    limit?: number
  }

  /**
   * MapLocation updateManyAndReturn
   */
  export type MapLocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapLocation
     */
    select?: MapLocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapLocation
     */
    omit?: MapLocationOmit<ExtArgs> | null
    /**
     * The data used to update MapLocations.
     */
    data: XOR<MapLocationUpdateManyMutationInput, MapLocationUncheckedUpdateManyInput>
    /**
     * Filter which MapLocations to update
     */
    where?: MapLocationWhereInput
    /**
     * Limit how many MapLocations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapLocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapLocation upsert
   */
  export type MapLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapLocation
     */
    select?: MapLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapLocation
     */
    omit?: MapLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapLocationInclude<ExtArgs> | null
    /**
     * The filter to search for the MapLocation to update in case it exists.
     */
    where: MapLocationWhereUniqueInput
    /**
     * In case the MapLocation found by the `where` argument doesn't exist, create a new MapLocation with this data.
     */
    create: XOR<MapLocationCreateInput, MapLocationUncheckedCreateInput>
    /**
     * In case the MapLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapLocationUpdateInput, MapLocationUncheckedUpdateInput>
  }

  /**
   * MapLocation delete
   */
  export type MapLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapLocation
     */
    select?: MapLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapLocation
     */
    omit?: MapLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapLocationInclude<ExtArgs> | null
    /**
     * Filter which MapLocation to delete.
     */
    where: MapLocationWhereUniqueInput
  }

  /**
   * MapLocation deleteMany
   */
  export type MapLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapLocations to delete
     */
    where?: MapLocationWhereInput
    /**
     * Limit how many MapLocations to delete.
     */
    limit?: number
  }

  /**
   * MapLocation without action
   */
  export type MapLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapLocation
     */
    select?: MapLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapLocation
     */
    omit?: MapLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapLocationInclude<ExtArgs> | null
  }


  /**
   * Model MapImage
   */

  export type AggregateMapImage = {
    _count: MapImageCountAggregateOutputType | null
    _min: MapImageMinAggregateOutputType | null
    _max: MapImageMaxAggregateOutputType | null
  }

  export type MapImageMinAggregateOutputType = {
    id: string | null
    eventName: string | null
    mapLocationId: string | null
    imageUrl: string | null
    date: Date | null
    comment: string | null
    memo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type MapImageMaxAggregateOutputType = {
    id: string | null
    eventName: string | null
    mapLocationId: string | null
    imageUrl: string | null
    date: Date | null
    comment: string | null
    memo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type MapImageCountAggregateOutputType = {
    id: number
    eventName: number
    mapLocationId: number
    imageUrl: number
    date: number
    comment: number
    memo: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type MapImageMinAggregateInputType = {
    id?: true
    eventName?: true
    mapLocationId?: true
    imageUrl?: true
    date?: true
    comment?: true
    memo?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type MapImageMaxAggregateInputType = {
    id?: true
    eventName?: true
    mapLocationId?: true
    imageUrl?: true
    date?: true
    comment?: true
    memo?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type MapImageCountAggregateInputType = {
    id?: true
    eventName?: true
    mapLocationId?: true
    imageUrl?: true
    date?: true
    comment?: true
    memo?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type MapImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapImage to aggregate.
     */
    where?: MapImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapImages to fetch.
     */
    orderBy?: MapImageOrderByWithRelationInput | MapImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MapImages
    **/
    _count?: true | MapImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapImageMaxAggregateInputType
  }

  export type GetMapImageAggregateType<T extends MapImageAggregateArgs> = {
        [P in keyof T & keyof AggregateMapImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapImage[P]>
      : GetScalarType<T[P], AggregateMapImage[P]>
  }




  export type MapImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapImageWhereInput
    orderBy?: MapImageOrderByWithAggregationInput | MapImageOrderByWithAggregationInput[]
    by: MapImageScalarFieldEnum[] | MapImageScalarFieldEnum
    having?: MapImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapImageCountAggregateInputType | true
    _min?: MapImageMinAggregateInputType
    _max?: MapImageMaxAggregateInputType
  }

  export type MapImageGroupByOutputType = {
    id: string
    eventName: string
    mapLocationId: string
    imageUrl: string
    date: Date
    comment: string
    memo: string
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: MapImageCountAggregateOutputType | null
    _min: MapImageMinAggregateOutputType | null
    _max: MapImageMaxAggregateOutputType | null
  }

  type GetMapImageGroupByPayload<T extends MapImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapImageGroupByOutputType[P]>
            : GetScalarType<T[P], MapImageGroupByOutputType[P]>
        }
      >
    >


  export type MapImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventName?: boolean
    mapLocationId?: boolean
    imageUrl?: boolean
    date?: boolean
    comment?: boolean
    memo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | MapImage$tagsArgs<ExtArgs>
    _count?: boolean | MapImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapImage"]>

  export type MapImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventName?: boolean
    mapLocationId?: boolean
    imageUrl?: boolean
    date?: boolean
    comment?: boolean
    memo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapImage"]>

  export type MapImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventName?: boolean
    mapLocationId?: boolean
    imageUrl?: boolean
    date?: boolean
    comment?: boolean
    memo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapImage"]>

  export type MapImageSelectScalar = {
    id?: boolean
    eventName?: boolean
    mapLocationId?: boolean
    imageUrl?: boolean
    date?: boolean
    comment?: boolean
    memo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type MapImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventName" | "mapLocationId" | "imageUrl" | "date" | "comment" | "memo" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["mapImage"]>
  export type MapImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | MapImage$tagsArgs<ExtArgs>
    _count?: boolean | MapImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MapImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MapImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MapImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MapImage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tags: Prisma.$MapImageTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventName: string
      mapLocationId: string
      imageUrl: string
      date: Date
      comment: string
      memo: string
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["mapImage"]>
    composites: {}
  }

  type MapImageGetPayload<S extends boolean | null | undefined | MapImageDefaultArgs> = $Result.GetResult<Prisma.$MapImagePayload, S>

  type MapImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapImageCountAggregateInputType | true
    }

  export interface MapImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MapImage'], meta: { name: 'MapImage' } }
    /**
     * Find zero or one MapImage that matches the filter.
     * @param {MapImageFindUniqueArgs} args - Arguments to find a MapImage
     * @example
     * // Get one MapImage
     * const mapImage = await prisma.mapImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapImageFindUniqueArgs>(args: SelectSubset<T, MapImageFindUniqueArgs<ExtArgs>>): Prisma__MapImageClient<$Result.GetResult<Prisma.$MapImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MapImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapImageFindUniqueOrThrowArgs} args - Arguments to find a MapImage
     * @example
     * // Get one MapImage
     * const mapImage = await prisma.mapImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapImageFindUniqueOrThrowArgs>(args: SelectSubset<T, MapImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapImageClient<$Result.GetResult<Prisma.$MapImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapImageFindFirstArgs} args - Arguments to find a MapImage
     * @example
     * // Get one MapImage
     * const mapImage = await prisma.mapImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapImageFindFirstArgs>(args?: SelectSubset<T, MapImageFindFirstArgs<ExtArgs>>): Prisma__MapImageClient<$Result.GetResult<Prisma.$MapImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapImageFindFirstOrThrowArgs} args - Arguments to find a MapImage
     * @example
     * // Get one MapImage
     * const mapImage = await prisma.mapImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapImageFindFirstOrThrowArgs>(args?: SelectSubset<T, MapImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapImageClient<$Result.GetResult<Prisma.$MapImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MapImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MapImages
     * const mapImages = await prisma.mapImage.findMany()
     * 
     * // Get first 10 MapImages
     * const mapImages = await prisma.mapImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapImageWithIdOnly = await prisma.mapImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapImageFindManyArgs>(args?: SelectSubset<T, MapImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MapImage.
     * @param {MapImageCreateArgs} args - Arguments to create a MapImage.
     * @example
     * // Create one MapImage
     * const MapImage = await prisma.mapImage.create({
     *   data: {
     *     // ... data to create a MapImage
     *   }
     * })
     * 
     */
    create<T extends MapImageCreateArgs>(args: SelectSubset<T, MapImageCreateArgs<ExtArgs>>): Prisma__MapImageClient<$Result.GetResult<Prisma.$MapImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MapImages.
     * @param {MapImageCreateManyArgs} args - Arguments to create many MapImages.
     * @example
     * // Create many MapImages
     * const mapImage = await prisma.mapImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapImageCreateManyArgs>(args?: SelectSubset<T, MapImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MapImages and returns the data saved in the database.
     * @param {MapImageCreateManyAndReturnArgs} args - Arguments to create many MapImages.
     * @example
     * // Create many MapImages
     * const mapImage = await prisma.mapImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MapImages and only return the `id`
     * const mapImageWithIdOnly = await prisma.mapImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MapImageCreateManyAndReturnArgs>(args?: SelectSubset<T, MapImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MapImage.
     * @param {MapImageDeleteArgs} args - Arguments to delete one MapImage.
     * @example
     * // Delete one MapImage
     * const MapImage = await prisma.mapImage.delete({
     *   where: {
     *     // ... filter to delete one MapImage
     *   }
     * })
     * 
     */
    delete<T extends MapImageDeleteArgs>(args: SelectSubset<T, MapImageDeleteArgs<ExtArgs>>): Prisma__MapImageClient<$Result.GetResult<Prisma.$MapImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MapImage.
     * @param {MapImageUpdateArgs} args - Arguments to update one MapImage.
     * @example
     * // Update one MapImage
     * const mapImage = await prisma.mapImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapImageUpdateArgs>(args: SelectSubset<T, MapImageUpdateArgs<ExtArgs>>): Prisma__MapImageClient<$Result.GetResult<Prisma.$MapImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MapImages.
     * @param {MapImageDeleteManyArgs} args - Arguments to filter MapImages to delete.
     * @example
     * // Delete a few MapImages
     * const { count } = await prisma.mapImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapImageDeleteManyArgs>(args?: SelectSubset<T, MapImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MapImages
     * const mapImage = await prisma.mapImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapImageUpdateManyArgs>(args: SelectSubset<T, MapImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapImages and returns the data updated in the database.
     * @param {MapImageUpdateManyAndReturnArgs} args - Arguments to update many MapImages.
     * @example
     * // Update many MapImages
     * const mapImage = await prisma.mapImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MapImages and only return the `id`
     * const mapImageWithIdOnly = await prisma.mapImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MapImageUpdateManyAndReturnArgs>(args: SelectSubset<T, MapImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MapImage.
     * @param {MapImageUpsertArgs} args - Arguments to update or create a MapImage.
     * @example
     * // Update or create a MapImage
     * const mapImage = await prisma.mapImage.upsert({
     *   create: {
     *     // ... data to create a MapImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MapImage we want to update
     *   }
     * })
     */
    upsert<T extends MapImageUpsertArgs>(args: SelectSubset<T, MapImageUpsertArgs<ExtArgs>>): Prisma__MapImageClient<$Result.GetResult<Prisma.$MapImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MapImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapImageCountArgs} args - Arguments to filter MapImages to count.
     * @example
     * // Count the number of MapImages
     * const count = await prisma.mapImage.count({
     *   where: {
     *     // ... the filter for the MapImages we want to count
     *   }
     * })
    **/
    count<T extends MapImageCountArgs>(
      args?: Subset<T, MapImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MapImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MapImageAggregateArgs>(args: Subset<T, MapImageAggregateArgs>): Prisma.PrismaPromise<GetMapImageAggregateType<T>>

    /**
     * Group by MapImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MapImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapImageGroupByArgs['orderBy'] }
        : { orderBy?: MapImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MapImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MapImage model
   */
  readonly fields: MapImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MapImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends MapImage$tagsArgs<ExtArgs> = {}>(args?: Subset<T, MapImage$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapImageTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MapImage model
   */
  interface MapImageFieldRefs {
    readonly id: FieldRef<"MapImage", 'String'>
    readonly eventName: FieldRef<"MapImage", 'String'>
    readonly mapLocationId: FieldRef<"MapImage", 'String'>
    readonly imageUrl: FieldRef<"MapImage", 'String'>
    readonly date: FieldRef<"MapImage", 'DateTime'>
    readonly comment: FieldRef<"MapImage", 'String'>
    readonly memo: FieldRef<"MapImage", 'String'>
    readonly createdAt: FieldRef<"MapImage", 'DateTime'>
    readonly updatedAt: FieldRef<"MapImage", 'DateTime'>
    readonly userId: FieldRef<"MapImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MapImage findUnique
   */
  export type MapImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImage
     */
    select?: MapImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImage
     */
    omit?: MapImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageInclude<ExtArgs> | null
    /**
     * Filter, which MapImage to fetch.
     */
    where: MapImageWhereUniqueInput
  }

  /**
   * MapImage findUniqueOrThrow
   */
  export type MapImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImage
     */
    select?: MapImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImage
     */
    omit?: MapImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageInclude<ExtArgs> | null
    /**
     * Filter, which MapImage to fetch.
     */
    where: MapImageWhereUniqueInput
  }

  /**
   * MapImage findFirst
   */
  export type MapImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImage
     */
    select?: MapImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImage
     */
    omit?: MapImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageInclude<ExtArgs> | null
    /**
     * Filter, which MapImage to fetch.
     */
    where?: MapImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapImages to fetch.
     */
    orderBy?: MapImageOrderByWithRelationInput | MapImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapImages.
     */
    cursor?: MapImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapImages.
     */
    distinct?: MapImageScalarFieldEnum | MapImageScalarFieldEnum[]
  }

  /**
   * MapImage findFirstOrThrow
   */
  export type MapImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImage
     */
    select?: MapImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImage
     */
    omit?: MapImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageInclude<ExtArgs> | null
    /**
     * Filter, which MapImage to fetch.
     */
    where?: MapImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapImages to fetch.
     */
    orderBy?: MapImageOrderByWithRelationInput | MapImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapImages.
     */
    cursor?: MapImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapImages.
     */
    distinct?: MapImageScalarFieldEnum | MapImageScalarFieldEnum[]
  }

  /**
   * MapImage findMany
   */
  export type MapImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImage
     */
    select?: MapImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImage
     */
    omit?: MapImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageInclude<ExtArgs> | null
    /**
     * Filter, which MapImages to fetch.
     */
    where?: MapImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapImages to fetch.
     */
    orderBy?: MapImageOrderByWithRelationInput | MapImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MapImages.
     */
    cursor?: MapImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapImages.
     */
    skip?: number
    distinct?: MapImageScalarFieldEnum | MapImageScalarFieldEnum[]
  }

  /**
   * MapImage create
   */
  export type MapImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImage
     */
    select?: MapImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImage
     */
    omit?: MapImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageInclude<ExtArgs> | null
    /**
     * The data needed to create a MapImage.
     */
    data: XOR<MapImageCreateInput, MapImageUncheckedCreateInput>
  }

  /**
   * MapImage createMany
   */
  export type MapImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MapImages.
     */
    data: MapImageCreateManyInput | MapImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MapImage createManyAndReturn
   */
  export type MapImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImage
     */
    select?: MapImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapImage
     */
    omit?: MapImageOmit<ExtArgs> | null
    /**
     * The data used to create many MapImages.
     */
    data: MapImageCreateManyInput | MapImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapImage update
   */
  export type MapImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImage
     */
    select?: MapImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImage
     */
    omit?: MapImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageInclude<ExtArgs> | null
    /**
     * The data needed to update a MapImage.
     */
    data: XOR<MapImageUpdateInput, MapImageUncheckedUpdateInput>
    /**
     * Choose, which MapImage to update.
     */
    where: MapImageWhereUniqueInput
  }

  /**
   * MapImage updateMany
   */
  export type MapImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MapImages.
     */
    data: XOR<MapImageUpdateManyMutationInput, MapImageUncheckedUpdateManyInput>
    /**
     * Filter which MapImages to update
     */
    where?: MapImageWhereInput
    /**
     * Limit how many MapImages to update.
     */
    limit?: number
  }

  /**
   * MapImage updateManyAndReturn
   */
  export type MapImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImage
     */
    select?: MapImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapImage
     */
    omit?: MapImageOmit<ExtArgs> | null
    /**
     * The data used to update MapImages.
     */
    data: XOR<MapImageUpdateManyMutationInput, MapImageUncheckedUpdateManyInput>
    /**
     * Filter which MapImages to update
     */
    where?: MapImageWhereInput
    /**
     * Limit how many MapImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapImage upsert
   */
  export type MapImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImage
     */
    select?: MapImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImage
     */
    omit?: MapImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageInclude<ExtArgs> | null
    /**
     * The filter to search for the MapImage to update in case it exists.
     */
    where: MapImageWhereUniqueInput
    /**
     * In case the MapImage found by the `where` argument doesn't exist, create a new MapImage with this data.
     */
    create: XOR<MapImageCreateInput, MapImageUncheckedCreateInput>
    /**
     * In case the MapImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapImageUpdateInput, MapImageUncheckedUpdateInput>
  }

  /**
   * MapImage delete
   */
  export type MapImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImage
     */
    select?: MapImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImage
     */
    omit?: MapImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageInclude<ExtArgs> | null
    /**
     * Filter which MapImage to delete.
     */
    where: MapImageWhereUniqueInput
  }

  /**
   * MapImage deleteMany
   */
  export type MapImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapImages to delete
     */
    where?: MapImageWhereInput
    /**
     * Limit how many MapImages to delete.
     */
    limit?: number
  }

  /**
   * MapImage.tags
   */
  export type MapImage$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImageTag
     */
    select?: MapImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImageTag
     */
    omit?: MapImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageTagInclude<ExtArgs> | null
    where?: MapImageTagWhereInput
    orderBy?: MapImageTagOrderByWithRelationInput | MapImageTagOrderByWithRelationInput[]
    cursor?: MapImageTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapImageTagScalarFieldEnum | MapImageTagScalarFieldEnum[]
  }

  /**
   * MapImage without action
   */
  export type MapImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImage
     */
    select?: MapImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImage
     */
    omit?: MapImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    MapImageTag?: boolean | Tag$MapImageTagArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MapImageTag?: boolean | Tag$MapImageTagArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      MapImageTag: Prisma.$MapImageTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    MapImageTag<T extends Tag$MapImageTagArgs<ExtArgs> = {}>(args?: Subset<T, Tag$MapImageTagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapImageTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.MapImageTag
   */
  export type Tag$MapImageTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImageTag
     */
    select?: MapImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImageTag
     */
    omit?: MapImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageTagInclude<ExtArgs> | null
    where?: MapImageTagWhereInput
    orderBy?: MapImageTagOrderByWithRelationInput | MapImageTagOrderByWithRelationInput[]
    cursor?: MapImageTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapImageTagScalarFieldEnum | MapImageTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model MapImageTag
   */

  export type AggregateMapImageTag = {
    _count: MapImageTagCountAggregateOutputType | null
    _min: MapImageTagMinAggregateOutputType | null
    _max: MapImageTagMaxAggregateOutputType | null
  }

  export type MapImageTagMinAggregateOutputType = {
    mapImageId: string | null
    tagId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MapImageTagMaxAggregateOutputType = {
    mapImageId: string | null
    tagId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MapImageTagCountAggregateOutputType = {
    mapImageId: number
    tagId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MapImageTagMinAggregateInputType = {
    mapImageId?: true
    tagId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MapImageTagMaxAggregateInputType = {
    mapImageId?: true
    tagId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MapImageTagCountAggregateInputType = {
    mapImageId?: true
    tagId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MapImageTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapImageTag to aggregate.
     */
    where?: MapImageTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapImageTags to fetch.
     */
    orderBy?: MapImageTagOrderByWithRelationInput | MapImageTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapImageTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapImageTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapImageTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MapImageTags
    **/
    _count?: true | MapImageTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapImageTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapImageTagMaxAggregateInputType
  }

  export type GetMapImageTagAggregateType<T extends MapImageTagAggregateArgs> = {
        [P in keyof T & keyof AggregateMapImageTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapImageTag[P]>
      : GetScalarType<T[P], AggregateMapImageTag[P]>
  }




  export type MapImageTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapImageTagWhereInput
    orderBy?: MapImageTagOrderByWithAggregationInput | MapImageTagOrderByWithAggregationInput[]
    by: MapImageTagScalarFieldEnum[] | MapImageTagScalarFieldEnum
    having?: MapImageTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapImageTagCountAggregateInputType | true
    _min?: MapImageTagMinAggregateInputType
    _max?: MapImageTagMaxAggregateInputType
  }

  export type MapImageTagGroupByOutputType = {
    mapImageId: string
    tagId: string
    createdAt: Date
    updatedAt: Date
    _count: MapImageTagCountAggregateOutputType | null
    _min: MapImageTagMinAggregateOutputType | null
    _max: MapImageTagMaxAggregateOutputType | null
  }

  type GetMapImageTagGroupByPayload<T extends MapImageTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapImageTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapImageTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapImageTagGroupByOutputType[P]>
            : GetScalarType<T[P], MapImageTagGroupByOutputType[P]>
        }
      >
    >


  export type MapImageTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mapImageId?: boolean
    tagId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mapImage?: boolean | MapImageDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapImageTag"]>

  export type MapImageTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mapImageId?: boolean
    tagId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mapImage?: boolean | MapImageDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapImageTag"]>

  export type MapImageTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mapImageId?: boolean
    tagId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mapImage?: boolean | MapImageDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapImageTag"]>

  export type MapImageTagSelectScalar = {
    mapImageId?: boolean
    tagId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MapImageTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mapImageId" | "tagId" | "createdAt" | "updatedAt", ExtArgs["result"]["mapImageTag"]>
  export type MapImageTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mapImage?: boolean | MapImageDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type MapImageTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mapImage?: boolean | MapImageDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type MapImageTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mapImage?: boolean | MapImageDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $MapImageTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MapImageTag"
    objects: {
      mapImage: Prisma.$MapImagePayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      mapImageId: string
      tagId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mapImageTag"]>
    composites: {}
  }

  type MapImageTagGetPayload<S extends boolean | null | undefined | MapImageTagDefaultArgs> = $Result.GetResult<Prisma.$MapImageTagPayload, S>

  type MapImageTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapImageTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapImageTagCountAggregateInputType | true
    }

  export interface MapImageTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MapImageTag'], meta: { name: 'MapImageTag' } }
    /**
     * Find zero or one MapImageTag that matches the filter.
     * @param {MapImageTagFindUniqueArgs} args - Arguments to find a MapImageTag
     * @example
     * // Get one MapImageTag
     * const mapImageTag = await prisma.mapImageTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapImageTagFindUniqueArgs>(args: SelectSubset<T, MapImageTagFindUniqueArgs<ExtArgs>>): Prisma__MapImageTagClient<$Result.GetResult<Prisma.$MapImageTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MapImageTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapImageTagFindUniqueOrThrowArgs} args - Arguments to find a MapImageTag
     * @example
     * // Get one MapImageTag
     * const mapImageTag = await prisma.mapImageTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapImageTagFindUniqueOrThrowArgs>(args: SelectSubset<T, MapImageTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapImageTagClient<$Result.GetResult<Prisma.$MapImageTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapImageTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapImageTagFindFirstArgs} args - Arguments to find a MapImageTag
     * @example
     * // Get one MapImageTag
     * const mapImageTag = await prisma.mapImageTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapImageTagFindFirstArgs>(args?: SelectSubset<T, MapImageTagFindFirstArgs<ExtArgs>>): Prisma__MapImageTagClient<$Result.GetResult<Prisma.$MapImageTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapImageTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapImageTagFindFirstOrThrowArgs} args - Arguments to find a MapImageTag
     * @example
     * // Get one MapImageTag
     * const mapImageTag = await prisma.mapImageTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapImageTagFindFirstOrThrowArgs>(args?: SelectSubset<T, MapImageTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapImageTagClient<$Result.GetResult<Prisma.$MapImageTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MapImageTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapImageTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MapImageTags
     * const mapImageTags = await prisma.mapImageTag.findMany()
     * 
     * // Get first 10 MapImageTags
     * const mapImageTags = await prisma.mapImageTag.findMany({ take: 10 })
     * 
     * // Only select the `mapImageId`
     * const mapImageTagWithMapImageIdOnly = await prisma.mapImageTag.findMany({ select: { mapImageId: true } })
     * 
     */
    findMany<T extends MapImageTagFindManyArgs>(args?: SelectSubset<T, MapImageTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapImageTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MapImageTag.
     * @param {MapImageTagCreateArgs} args - Arguments to create a MapImageTag.
     * @example
     * // Create one MapImageTag
     * const MapImageTag = await prisma.mapImageTag.create({
     *   data: {
     *     // ... data to create a MapImageTag
     *   }
     * })
     * 
     */
    create<T extends MapImageTagCreateArgs>(args: SelectSubset<T, MapImageTagCreateArgs<ExtArgs>>): Prisma__MapImageTagClient<$Result.GetResult<Prisma.$MapImageTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MapImageTags.
     * @param {MapImageTagCreateManyArgs} args - Arguments to create many MapImageTags.
     * @example
     * // Create many MapImageTags
     * const mapImageTag = await prisma.mapImageTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapImageTagCreateManyArgs>(args?: SelectSubset<T, MapImageTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MapImageTags and returns the data saved in the database.
     * @param {MapImageTagCreateManyAndReturnArgs} args - Arguments to create many MapImageTags.
     * @example
     * // Create many MapImageTags
     * const mapImageTag = await prisma.mapImageTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MapImageTags and only return the `mapImageId`
     * const mapImageTagWithMapImageIdOnly = await prisma.mapImageTag.createManyAndReturn({
     *   select: { mapImageId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MapImageTagCreateManyAndReturnArgs>(args?: SelectSubset<T, MapImageTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapImageTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MapImageTag.
     * @param {MapImageTagDeleteArgs} args - Arguments to delete one MapImageTag.
     * @example
     * // Delete one MapImageTag
     * const MapImageTag = await prisma.mapImageTag.delete({
     *   where: {
     *     // ... filter to delete one MapImageTag
     *   }
     * })
     * 
     */
    delete<T extends MapImageTagDeleteArgs>(args: SelectSubset<T, MapImageTagDeleteArgs<ExtArgs>>): Prisma__MapImageTagClient<$Result.GetResult<Prisma.$MapImageTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MapImageTag.
     * @param {MapImageTagUpdateArgs} args - Arguments to update one MapImageTag.
     * @example
     * // Update one MapImageTag
     * const mapImageTag = await prisma.mapImageTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapImageTagUpdateArgs>(args: SelectSubset<T, MapImageTagUpdateArgs<ExtArgs>>): Prisma__MapImageTagClient<$Result.GetResult<Prisma.$MapImageTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MapImageTags.
     * @param {MapImageTagDeleteManyArgs} args - Arguments to filter MapImageTags to delete.
     * @example
     * // Delete a few MapImageTags
     * const { count } = await prisma.mapImageTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapImageTagDeleteManyArgs>(args?: SelectSubset<T, MapImageTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapImageTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapImageTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MapImageTags
     * const mapImageTag = await prisma.mapImageTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapImageTagUpdateManyArgs>(args: SelectSubset<T, MapImageTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapImageTags and returns the data updated in the database.
     * @param {MapImageTagUpdateManyAndReturnArgs} args - Arguments to update many MapImageTags.
     * @example
     * // Update many MapImageTags
     * const mapImageTag = await prisma.mapImageTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MapImageTags and only return the `mapImageId`
     * const mapImageTagWithMapImageIdOnly = await prisma.mapImageTag.updateManyAndReturn({
     *   select: { mapImageId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MapImageTagUpdateManyAndReturnArgs>(args: SelectSubset<T, MapImageTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapImageTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MapImageTag.
     * @param {MapImageTagUpsertArgs} args - Arguments to update or create a MapImageTag.
     * @example
     * // Update or create a MapImageTag
     * const mapImageTag = await prisma.mapImageTag.upsert({
     *   create: {
     *     // ... data to create a MapImageTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MapImageTag we want to update
     *   }
     * })
     */
    upsert<T extends MapImageTagUpsertArgs>(args: SelectSubset<T, MapImageTagUpsertArgs<ExtArgs>>): Prisma__MapImageTagClient<$Result.GetResult<Prisma.$MapImageTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MapImageTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapImageTagCountArgs} args - Arguments to filter MapImageTags to count.
     * @example
     * // Count the number of MapImageTags
     * const count = await prisma.mapImageTag.count({
     *   where: {
     *     // ... the filter for the MapImageTags we want to count
     *   }
     * })
    **/
    count<T extends MapImageTagCountArgs>(
      args?: Subset<T, MapImageTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapImageTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MapImageTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapImageTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MapImageTagAggregateArgs>(args: Subset<T, MapImageTagAggregateArgs>): Prisma.PrismaPromise<GetMapImageTagAggregateType<T>>

    /**
     * Group by MapImageTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapImageTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MapImageTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapImageTagGroupByArgs['orderBy'] }
        : { orderBy?: MapImageTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MapImageTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapImageTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MapImageTag model
   */
  readonly fields: MapImageTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MapImageTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapImageTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mapImage<T extends MapImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MapImageDefaultArgs<ExtArgs>>): Prisma__MapImageClient<$Result.GetResult<Prisma.$MapImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MapImageTag model
   */
  interface MapImageTagFieldRefs {
    readonly mapImageId: FieldRef<"MapImageTag", 'String'>
    readonly tagId: FieldRef<"MapImageTag", 'String'>
    readonly createdAt: FieldRef<"MapImageTag", 'DateTime'>
    readonly updatedAt: FieldRef<"MapImageTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MapImageTag findUnique
   */
  export type MapImageTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImageTag
     */
    select?: MapImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImageTag
     */
    omit?: MapImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageTagInclude<ExtArgs> | null
    /**
     * Filter, which MapImageTag to fetch.
     */
    where: MapImageTagWhereUniqueInput
  }

  /**
   * MapImageTag findUniqueOrThrow
   */
  export type MapImageTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImageTag
     */
    select?: MapImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImageTag
     */
    omit?: MapImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageTagInclude<ExtArgs> | null
    /**
     * Filter, which MapImageTag to fetch.
     */
    where: MapImageTagWhereUniqueInput
  }

  /**
   * MapImageTag findFirst
   */
  export type MapImageTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImageTag
     */
    select?: MapImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImageTag
     */
    omit?: MapImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageTagInclude<ExtArgs> | null
    /**
     * Filter, which MapImageTag to fetch.
     */
    where?: MapImageTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapImageTags to fetch.
     */
    orderBy?: MapImageTagOrderByWithRelationInput | MapImageTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapImageTags.
     */
    cursor?: MapImageTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapImageTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapImageTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapImageTags.
     */
    distinct?: MapImageTagScalarFieldEnum | MapImageTagScalarFieldEnum[]
  }

  /**
   * MapImageTag findFirstOrThrow
   */
  export type MapImageTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImageTag
     */
    select?: MapImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImageTag
     */
    omit?: MapImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageTagInclude<ExtArgs> | null
    /**
     * Filter, which MapImageTag to fetch.
     */
    where?: MapImageTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapImageTags to fetch.
     */
    orderBy?: MapImageTagOrderByWithRelationInput | MapImageTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapImageTags.
     */
    cursor?: MapImageTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapImageTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapImageTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapImageTags.
     */
    distinct?: MapImageTagScalarFieldEnum | MapImageTagScalarFieldEnum[]
  }

  /**
   * MapImageTag findMany
   */
  export type MapImageTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImageTag
     */
    select?: MapImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImageTag
     */
    omit?: MapImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageTagInclude<ExtArgs> | null
    /**
     * Filter, which MapImageTags to fetch.
     */
    where?: MapImageTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapImageTags to fetch.
     */
    orderBy?: MapImageTagOrderByWithRelationInput | MapImageTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MapImageTags.
     */
    cursor?: MapImageTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapImageTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapImageTags.
     */
    skip?: number
    distinct?: MapImageTagScalarFieldEnum | MapImageTagScalarFieldEnum[]
  }

  /**
   * MapImageTag create
   */
  export type MapImageTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImageTag
     */
    select?: MapImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImageTag
     */
    omit?: MapImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageTagInclude<ExtArgs> | null
    /**
     * The data needed to create a MapImageTag.
     */
    data: XOR<MapImageTagCreateInput, MapImageTagUncheckedCreateInput>
  }

  /**
   * MapImageTag createMany
   */
  export type MapImageTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MapImageTags.
     */
    data: MapImageTagCreateManyInput | MapImageTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MapImageTag createManyAndReturn
   */
  export type MapImageTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImageTag
     */
    select?: MapImageTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapImageTag
     */
    omit?: MapImageTagOmit<ExtArgs> | null
    /**
     * The data used to create many MapImageTags.
     */
    data: MapImageTagCreateManyInput | MapImageTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapImageTag update
   */
  export type MapImageTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImageTag
     */
    select?: MapImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImageTag
     */
    omit?: MapImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageTagInclude<ExtArgs> | null
    /**
     * The data needed to update a MapImageTag.
     */
    data: XOR<MapImageTagUpdateInput, MapImageTagUncheckedUpdateInput>
    /**
     * Choose, which MapImageTag to update.
     */
    where: MapImageTagWhereUniqueInput
  }

  /**
   * MapImageTag updateMany
   */
  export type MapImageTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MapImageTags.
     */
    data: XOR<MapImageTagUpdateManyMutationInput, MapImageTagUncheckedUpdateManyInput>
    /**
     * Filter which MapImageTags to update
     */
    where?: MapImageTagWhereInput
    /**
     * Limit how many MapImageTags to update.
     */
    limit?: number
  }

  /**
   * MapImageTag updateManyAndReturn
   */
  export type MapImageTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImageTag
     */
    select?: MapImageTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapImageTag
     */
    omit?: MapImageTagOmit<ExtArgs> | null
    /**
     * The data used to update MapImageTags.
     */
    data: XOR<MapImageTagUpdateManyMutationInput, MapImageTagUncheckedUpdateManyInput>
    /**
     * Filter which MapImageTags to update
     */
    where?: MapImageTagWhereInput
    /**
     * Limit how many MapImageTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapImageTag upsert
   */
  export type MapImageTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImageTag
     */
    select?: MapImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImageTag
     */
    omit?: MapImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageTagInclude<ExtArgs> | null
    /**
     * The filter to search for the MapImageTag to update in case it exists.
     */
    where: MapImageTagWhereUniqueInput
    /**
     * In case the MapImageTag found by the `where` argument doesn't exist, create a new MapImageTag with this data.
     */
    create: XOR<MapImageTagCreateInput, MapImageTagUncheckedCreateInput>
    /**
     * In case the MapImageTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapImageTagUpdateInput, MapImageTagUncheckedUpdateInput>
  }

  /**
   * MapImageTag delete
   */
  export type MapImageTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImageTag
     */
    select?: MapImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImageTag
     */
    omit?: MapImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageTagInclude<ExtArgs> | null
    /**
     * Filter which MapImageTag to delete.
     */
    where: MapImageTagWhereUniqueInput
  }

  /**
   * MapImageTag deleteMany
   */
  export type MapImageTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapImageTags to delete
     */
    where?: MapImageTagWhereInput
    /**
     * Limit how many MapImageTags to delete.
     */
    limit?: number
  }

  /**
   * MapImageTag without action
   */
  export type MapImageTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapImageTag
     */
    select?: MapImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapImageTag
     */
    omit?: MapImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapImageTagInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    googleId: 'googleId',
    email: 'email',
    name: 'name',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MapLocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lat: 'lat',
    lng: 'lng',
    description: 'description',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type MapLocationScalarFieldEnum = (typeof MapLocationScalarFieldEnum)[keyof typeof MapLocationScalarFieldEnum]


  export const MapImageScalarFieldEnum: {
    id: 'id',
    eventName: 'eventName',
    mapLocationId: 'mapLocationId',
    imageUrl: 'imageUrl',
    date: 'date',
    comment: 'comment',
    memo: 'memo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type MapImageScalarFieldEnum = (typeof MapImageScalarFieldEnum)[keyof typeof MapImageScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const MapImageTagScalarFieldEnum: {
    mapImageId: 'mapImageId',
    tagId: 'tagId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MapImageTagScalarFieldEnum = (typeof MapImageTagScalarFieldEnum)[keyof typeof MapImageTagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    googleId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleNullableFilter<"User"> | $Enums.Role | null
    mapLocations?: MapLocationListRelationFilter
    mapImages?: MapImageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    googleId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrderInput | SortOrder
    mapLocations?: MapLocationOrderByRelationAggregateInput
    mapImages?: MapImageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    googleId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleNullableFilter<"User"> | $Enums.Role | null
    mapLocations?: MapLocationListRelationFilter
    mapImages?: MapImageListRelationFilter
  }, "id" | "googleId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    googleId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    googleId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleNullableWithAggregatesFilter<"User"> | $Enums.Role | null
  }

  export type MapLocationWhereInput = {
    AND?: MapLocationWhereInput | MapLocationWhereInput[]
    OR?: MapLocationWhereInput[]
    NOT?: MapLocationWhereInput | MapLocationWhereInput[]
    id?: StringFilter<"MapLocation"> | string
    name?: StringFilter<"MapLocation"> | string
    lat?: FloatFilter<"MapLocation"> | number
    lng?: FloatFilter<"MapLocation"> | number
    description?: StringNullableFilter<"MapLocation"> | string | null
    userId?: StringFilter<"MapLocation"> | string
    createdAt?: DateTimeFilter<"MapLocation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MapLocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MapLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MapLocationWhereInput | MapLocationWhereInput[]
    OR?: MapLocationWhereInput[]
    NOT?: MapLocationWhereInput | MapLocationWhereInput[]
    name?: StringFilter<"MapLocation"> | string
    lat?: FloatFilter<"MapLocation"> | number
    lng?: FloatFilter<"MapLocation"> | number
    description?: StringNullableFilter<"MapLocation"> | string | null
    userId?: StringFilter<"MapLocation"> | string
    createdAt?: DateTimeFilter<"MapLocation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MapLocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: MapLocationCountOrderByAggregateInput
    _avg?: MapLocationAvgOrderByAggregateInput
    _max?: MapLocationMaxOrderByAggregateInput
    _min?: MapLocationMinOrderByAggregateInput
    _sum?: MapLocationSumOrderByAggregateInput
  }

  export type MapLocationScalarWhereWithAggregatesInput = {
    AND?: MapLocationScalarWhereWithAggregatesInput | MapLocationScalarWhereWithAggregatesInput[]
    OR?: MapLocationScalarWhereWithAggregatesInput[]
    NOT?: MapLocationScalarWhereWithAggregatesInput | MapLocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MapLocation"> | string
    name?: StringWithAggregatesFilter<"MapLocation"> | string
    lat?: FloatWithAggregatesFilter<"MapLocation"> | number
    lng?: FloatWithAggregatesFilter<"MapLocation"> | number
    description?: StringNullableWithAggregatesFilter<"MapLocation"> | string | null
    userId?: StringWithAggregatesFilter<"MapLocation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MapLocation"> | Date | string
  }

  export type MapImageWhereInput = {
    AND?: MapImageWhereInput | MapImageWhereInput[]
    OR?: MapImageWhereInput[]
    NOT?: MapImageWhereInput | MapImageWhereInput[]
    id?: StringFilter<"MapImage"> | string
    eventName?: StringFilter<"MapImage"> | string
    mapLocationId?: StringFilter<"MapImage"> | string
    imageUrl?: StringFilter<"MapImage"> | string
    date?: DateTimeFilter<"MapImage"> | Date | string
    comment?: StringFilter<"MapImage"> | string
    memo?: StringFilter<"MapImage"> | string
    createdAt?: DateTimeFilter<"MapImage"> | Date | string
    updatedAt?: DateTimeFilter<"MapImage"> | Date | string
    userId?: StringFilter<"MapImage"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: MapImageTagListRelationFilter
  }

  export type MapImageOrderByWithRelationInput = {
    id?: SortOrder
    eventName?: SortOrder
    mapLocationId?: SortOrder
    imageUrl?: SortOrder
    date?: SortOrder
    comment?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    tags?: MapImageTagOrderByRelationAggregateInput
  }

  export type MapImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MapImageWhereInput | MapImageWhereInput[]
    OR?: MapImageWhereInput[]
    NOT?: MapImageWhereInput | MapImageWhereInput[]
    eventName?: StringFilter<"MapImage"> | string
    mapLocationId?: StringFilter<"MapImage"> | string
    imageUrl?: StringFilter<"MapImage"> | string
    date?: DateTimeFilter<"MapImage"> | Date | string
    comment?: StringFilter<"MapImage"> | string
    memo?: StringFilter<"MapImage"> | string
    createdAt?: DateTimeFilter<"MapImage"> | Date | string
    updatedAt?: DateTimeFilter<"MapImage"> | Date | string
    userId?: StringFilter<"MapImage"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: MapImageTagListRelationFilter
  }, "id">

  export type MapImageOrderByWithAggregationInput = {
    id?: SortOrder
    eventName?: SortOrder
    mapLocationId?: SortOrder
    imageUrl?: SortOrder
    date?: SortOrder
    comment?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: MapImageCountOrderByAggregateInput
    _max?: MapImageMaxOrderByAggregateInput
    _min?: MapImageMinOrderByAggregateInput
  }

  export type MapImageScalarWhereWithAggregatesInput = {
    AND?: MapImageScalarWhereWithAggregatesInput | MapImageScalarWhereWithAggregatesInput[]
    OR?: MapImageScalarWhereWithAggregatesInput[]
    NOT?: MapImageScalarWhereWithAggregatesInput | MapImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MapImage"> | string
    eventName?: StringWithAggregatesFilter<"MapImage"> | string
    mapLocationId?: StringWithAggregatesFilter<"MapImage"> | string
    imageUrl?: StringWithAggregatesFilter<"MapImage"> | string
    date?: DateTimeWithAggregatesFilter<"MapImage"> | Date | string
    comment?: StringWithAggregatesFilter<"MapImage"> | string
    memo?: StringWithAggregatesFilter<"MapImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MapImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MapImage"> | Date | string
    userId?: StringWithAggregatesFilter<"MapImage"> | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    MapImageTag?: MapImageTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    MapImageTag?: MapImageTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    MapImageTag?: MapImageTagListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type MapImageTagWhereInput = {
    AND?: MapImageTagWhereInput | MapImageTagWhereInput[]
    OR?: MapImageTagWhereInput[]
    NOT?: MapImageTagWhereInput | MapImageTagWhereInput[]
    mapImageId?: StringFilter<"MapImageTag"> | string
    tagId?: StringFilter<"MapImageTag"> | string
    createdAt?: DateTimeFilter<"MapImageTag"> | Date | string
    updatedAt?: DateTimeFilter<"MapImageTag"> | Date | string
    mapImage?: XOR<MapImageScalarRelationFilter, MapImageWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type MapImageTagOrderByWithRelationInput = {
    mapImageId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mapImage?: MapImageOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type MapImageTagWhereUniqueInput = Prisma.AtLeast<{
    mapImageId_tagId?: MapImageTagMapImageIdTagIdCompoundUniqueInput
    AND?: MapImageTagWhereInput | MapImageTagWhereInput[]
    OR?: MapImageTagWhereInput[]
    NOT?: MapImageTagWhereInput | MapImageTagWhereInput[]
    mapImageId?: StringFilter<"MapImageTag"> | string
    tagId?: StringFilter<"MapImageTag"> | string
    createdAt?: DateTimeFilter<"MapImageTag"> | Date | string
    updatedAt?: DateTimeFilter<"MapImageTag"> | Date | string
    mapImage?: XOR<MapImageScalarRelationFilter, MapImageWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "mapImageId_tagId">

  export type MapImageTagOrderByWithAggregationInput = {
    mapImageId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MapImageTagCountOrderByAggregateInput
    _max?: MapImageTagMaxOrderByAggregateInput
    _min?: MapImageTagMinOrderByAggregateInput
  }

  export type MapImageTagScalarWhereWithAggregatesInput = {
    AND?: MapImageTagScalarWhereWithAggregatesInput | MapImageTagScalarWhereWithAggregatesInput[]
    OR?: MapImageTagScalarWhereWithAggregatesInput[]
    NOT?: MapImageTagScalarWhereWithAggregatesInput | MapImageTagScalarWhereWithAggregatesInput[]
    mapImageId?: StringWithAggregatesFilter<"MapImageTag"> | string
    tagId?: StringWithAggregatesFilter<"MapImageTag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MapImageTag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MapImageTag"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role | null
    mapLocations?: MapLocationCreateNestedManyWithoutUserInput
    mapImages?: MapImageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role | null
    mapLocations?: MapLocationUncheckedCreateNestedManyWithoutUserInput
    mapImages?: MapImageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    mapLocations?: MapLocationUpdateManyWithoutUserNestedInput
    mapImages?: MapImageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    mapLocations?: MapLocationUncheckedUpdateManyWithoutUserNestedInput
    mapImages?: MapImageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
  }

  export type MapLocationCreateInput = {
    id?: string
    name: string
    lat: number
    lng: number
    description?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMapLocationsInput
  }

  export type MapLocationUncheckedCreateInput = {
    id?: string
    name: string
    lat: number
    lng: number
    description?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type MapLocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMapLocationsNestedInput
  }

  export type MapLocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapLocationCreateManyInput = {
    id?: string
    name: string
    lat: number
    lng: number
    description?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type MapLocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapLocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapImageCreateInput = {
    id?: string
    eventName: string
    mapLocationId: string
    imageUrl: string
    date: Date | string
    comment: string
    memo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMapImagesInput
    tags?: MapImageTagCreateNestedManyWithoutMapImageInput
  }

  export type MapImageUncheckedCreateInput = {
    id?: string
    eventName: string
    mapLocationId: string
    imageUrl: string
    date: Date | string
    comment: string
    memo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    tags?: MapImageTagUncheckedCreateNestedManyWithoutMapImageInput
  }

  export type MapImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    mapLocationId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    memo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMapImagesNestedInput
    tags?: MapImageTagUpdateManyWithoutMapImageNestedInput
  }

  export type MapImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    mapLocationId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    memo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    tags?: MapImageTagUncheckedUpdateManyWithoutMapImageNestedInput
  }

  export type MapImageCreateManyInput = {
    id?: string
    eventName: string
    mapLocationId: string
    imageUrl: string
    date: Date | string
    comment: string
    memo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type MapImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    mapLocationId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    memo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    mapLocationId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    memo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    MapImageTag?: MapImageTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    MapImageTag?: MapImageTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    MapImageTag?: MapImageTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    MapImageTag?: MapImageTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MapImageTagCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    mapImage: MapImageCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutMapImageTagInput
  }

  export type MapImageTagUncheckedCreateInput = {
    mapImageId: string
    tagId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapImageTagUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mapImage?: MapImageUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutMapImageTagNestedInput
  }

  export type MapImageTagUncheckedUpdateInput = {
    mapImageId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapImageTagCreateManyInput = {
    mapImageId: string
    tagId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapImageTagUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapImageTagUncheckedUpdateManyInput = {
    mapImageId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type MapLocationListRelationFilter = {
    every?: MapLocationWhereInput
    some?: MapLocationWhereInput
    none?: MapLocationWhereInput
  }

  export type MapImageListRelationFilter = {
    every?: MapImageWhereInput
    some?: MapImageWhereInput
    none?: MapImageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MapLocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MapImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    googleId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MapLocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type MapLocationAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type MapLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type MapLocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type MapLocationSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MapImageTagListRelationFilter = {
    every?: MapImageTagWhereInput
    some?: MapImageTagWhereInput
    none?: MapImageTagWhereInput
  }

  export type MapImageTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MapImageCountOrderByAggregateInput = {
    id?: SortOrder
    eventName?: SortOrder
    mapLocationId?: SortOrder
    imageUrl?: SortOrder
    date?: SortOrder
    comment?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MapImageMaxOrderByAggregateInput = {
    id?: SortOrder
    eventName?: SortOrder
    mapLocationId?: SortOrder
    imageUrl?: SortOrder
    date?: SortOrder
    comment?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MapImageMinOrderByAggregateInput = {
    id?: SortOrder
    eventName?: SortOrder
    mapLocationId?: SortOrder
    imageUrl?: SortOrder
    date?: SortOrder
    comment?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MapImageScalarRelationFilter = {
    is?: MapImageWhereInput
    isNot?: MapImageWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type MapImageTagMapImageIdTagIdCompoundUniqueInput = {
    mapImageId: string
    tagId: string
  }

  export type MapImageTagCountOrderByAggregateInput = {
    mapImageId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MapImageTagMaxOrderByAggregateInput = {
    mapImageId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MapImageTagMinOrderByAggregateInput = {
    mapImageId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MapLocationCreateNestedManyWithoutUserInput = {
    create?: XOR<MapLocationCreateWithoutUserInput, MapLocationUncheckedCreateWithoutUserInput> | MapLocationCreateWithoutUserInput[] | MapLocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MapLocationCreateOrConnectWithoutUserInput | MapLocationCreateOrConnectWithoutUserInput[]
    createMany?: MapLocationCreateManyUserInputEnvelope
    connect?: MapLocationWhereUniqueInput | MapLocationWhereUniqueInput[]
  }

  export type MapImageCreateNestedManyWithoutUserInput = {
    create?: XOR<MapImageCreateWithoutUserInput, MapImageUncheckedCreateWithoutUserInput> | MapImageCreateWithoutUserInput[] | MapImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MapImageCreateOrConnectWithoutUserInput | MapImageCreateOrConnectWithoutUserInput[]
    createMany?: MapImageCreateManyUserInputEnvelope
    connect?: MapImageWhereUniqueInput | MapImageWhereUniqueInput[]
  }

  export type MapLocationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MapLocationCreateWithoutUserInput, MapLocationUncheckedCreateWithoutUserInput> | MapLocationCreateWithoutUserInput[] | MapLocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MapLocationCreateOrConnectWithoutUserInput | MapLocationCreateOrConnectWithoutUserInput[]
    createMany?: MapLocationCreateManyUserInputEnvelope
    connect?: MapLocationWhereUniqueInput | MapLocationWhereUniqueInput[]
  }

  export type MapImageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MapImageCreateWithoutUserInput, MapImageUncheckedCreateWithoutUserInput> | MapImageCreateWithoutUserInput[] | MapImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MapImageCreateOrConnectWithoutUserInput | MapImageCreateOrConnectWithoutUserInput[]
    createMany?: MapImageCreateManyUserInputEnvelope
    connect?: MapImageWhereUniqueInput | MapImageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableEnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role | null
  }

  export type MapLocationUpdateManyWithoutUserNestedInput = {
    create?: XOR<MapLocationCreateWithoutUserInput, MapLocationUncheckedCreateWithoutUserInput> | MapLocationCreateWithoutUserInput[] | MapLocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MapLocationCreateOrConnectWithoutUserInput | MapLocationCreateOrConnectWithoutUserInput[]
    upsert?: MapLocationUpsertWithWhereUniqueWithoutUserInput | MapLocationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MapLocationCreateManyUserInputEnvelope
    set?: MapLocationWhereUniqueInput | MapLocationWhereUniqueInput[]
    disconnect?: MapLocationWhereUniqueInput | MapLocationWhereUniqueInput[]
    delete?: MapLocationWhereUniqueInput | MapLocationWhereUniqueInput[]
    connect?: MapLocationWhereUniqueInput | MapLocationWhereUniqueInput[]
    update?: MapLocationUpdateWithWhereUniqueWithoutUserInput | MapLocationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MapLocationUpdateManyWithWhereWithoutUserInput | MapLocationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MapLocationScalarWhereInput | MapLocationScalarWhereInput[]
  }

  export type MapImageUpdateManyWithoutUserNestedInput = {
    create?: XOR<MapImageCreateWithoutUserInput, MapImageUncheckedCreateWithoutUserInput> | MapImageCreateWithoutUserInput[] | MapImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MapImageCreateOrConnectWithoutUserInput | MapImageCreateOrConnectWithoutUserInput[]
    upsert?: MapImageUpsertWithWhereUniqueWithoutUserInput | MapImageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MapImageCreateManyUserInputEnvelope
    set?: MapImageWhereUniqueInput | MapImageWhereUniqueInput[]
    disconnect?: MapImageWhereUniqueInput | MapImageWhereUniqueInput[]
    delete?: MapImageWhereUniqueInput | MapImageWhereUniqueInput[]
    connect?: MapImageWhereUniqueInput | MapImageWhereUniqueInput[]
    update?: MapImageUpdateWithWhereUniqueWithoutUserInput | MapImageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MapImageUpdateManyWithWhereWithoutUserInput | MapImageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MapImageScalarWhereInput | MapImageScalarWhereInput[]
  }

  export type MapLocationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MapLocationCreateWithoutUserInput, MapLocationUncheckedCreateWithoutUserInput> | MapLocationCreateWithoutUserInput[] | MapLocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MapLocationCreateOrConnectWithoutUserInput | MapLocationCreateOrConnectWithoutUserInput[]
    upsert?: MapLocationUpsertWithWhereUniqueWithoutUserInput | MapLocationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MapLocationCreateManyUserInputEnvelope
    set?: MapLocationWhereUniqueInput | MapLocationWhereUniqueInput[]
    disconnect?: MapLocationWhereUniqueInput | MapLocationWhereUniqueInput[]
    delete?: MapLocationWhereUniqueInput | MapLocationWhereUniqueInput[]
    connect?: MapLocationWhereUniqueInput | MapLocationWhereUniqueInput[]
    update?: MapLocationUpdateWithWhereUniqueWithoutUserInput | MapLocationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MapLocationUpdateManyWithWhereWithoutUserInput | MapLocationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MapLocationScalarWhereInput | MapLocationScalarWhereInput[]
  }

  export type MapImageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MapImageCreateWithoutUserInput, MapImageUncheckedCreateWithoutUserInput> | MapImageCreateWithoutUserInput[] | MapImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MapImageCreateOrConnectWithoutUserInput | MapImageCreateOrConnectWithoutUserInput[]
    upsert?: MapImageUpsertWithWhereUniqueWithoutUserInput | MapImageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MapImageCreateManyUserInputEnvelope
    set?: MapImageWhereUniqueInput | MapImageWhereUniqueInput[]
    disconnect?: MapImageWhereUniqueInput | MapImageWhereUniqueInput[]
    delete?: MapImageWhereUniqueInput | MapImageWhereUniqueInput[]
    connect?: MapImageWhereUniqueInput | MapImageWhereUniqueInput[]
    update?: MapImageUpdateWithWhereUniqueWithoutUserInput | MapImageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MapImageUpdateManyWithWhereWithoutUserInput | MapImageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MapImageScalarWhereInput | MapImageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMapLocationsInput = {
    create?: XOR<UserCreateWithoutMapLocationsInput, UserUncheckedCreateWithoutMapLocationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMapLocationsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMapLocationsNestedInput = {
    create?: XOR<UserCreateWithoutMapLocationsInput, UserUncheckedCreateWithoutMapLocationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMapLocationsInput
    upsert?: UserUpsertWithoutMapLocationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMapLocationsInput, UserUpdateWithoutMapLocationsInput>, UserUncheckedUpdateWithoutMapLocationsInput>
  }

  export type UserCreateNestedOneWithoutMapImagesInput = {
    create?: XOR<UserCreateWithoutMapImagesInput, UserUncheckedCreateWithoutMapImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMapImagesInput
    connect?: UserWhereUniqueInput
  }

  export type MapImageTagCreateNestedManyWithoutMapImageInput = {
    create?: XOR<MapImageTagCreateWithoutMapImageInput, MapImageTagUncheckedCreateWithoutMapImageInput> | MapImageTagCreateWithoutMapImageInput[] | MapImageTagUncheckedCreateWithoutMapImageInput[]
    connectOrCreate?: MapImageTagCreateOrConnectWithoutMapImageInput | MapImageTagCreateOrConnectWithoutMapImageInput[]
    createMany?: MapImageTagCreateManyMapImageInputEnvelope
    connect?: MapImageTagWhereUniqueInput | MapImageTagWhereUniqueInput[]
  }

  export type MapImageTagUncheckedCreateNestedManyWithoutMapImageInput = {
    create?: XOR<MapImageTagCreateWithoutMapImageInput, MapImageTagUncheckedCreateWithoutMapImageInput> | MapImageTagCreateWithoutMapImageInput[] | MapImageTagUncheckedCreateWithoutMapImageInput[]
    connectOrCreate?: MapImageTagCreateOrConnectWithoutMapImageInput | MapImageTagCreateOrConnectWithoutMapImageInput[]
    createMany?: MapImageTagCreateManyMapImageInputEnvelope
    connect?: MapImageTagWhereUniqueInput | MapImageTagWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMapImagesNestedInput = {
    create?: XOR<UserCreateWithoutMapImagesInput, UserUncheckedCreateWithoutMapImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMapImagesInput
    upsert?: UserUpsertWithoutMapImagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMapImagesInput, UserUpdateWithoutMapImagesInput>, UserUncheckedUpdateWithoutMapImagesInput>
  }

  export type MapImageTagUpdateManyWithoutMapImageNestedInput = {
    create?: XOR<MapImageTagCreateWithoutMapImageInput, MapImageTagUncheckedCreateWithoutMapImageInput> | MapImageTagCreateWithoutMapImageInput[] | MapImageTagUncheckedCreateWithoutMapImageInput[]
    connectOrCreate?: MapImageTagCreateOrConnectWithoutMapImageInput | MapImageTagCreateOrConnectWithoutMapImageInput[]
    upsert?: MapImageTagUpsertWithWhereUniqueWithoutMapImageInput | MapImageTagUpsertWithWhereUniqueWithoutMapImageInput[]
    createMany?: MapImageTagCreateManyMapImageInputEnvelope
    set?: MapImageTagWhereUniqueInput | MapImageTagWhereUniqueInput[]
    disconnect?: MapImageTagWhereUniqueInput | MapImageTagWhereUniqueInput[]
    delete?: MapImageTagWhereUniqueInput | MapImageTagWhereUniqueInput[]
    connect?: MapImageTagWhereUniqueInput | MapImageTagWhereUniqueInput[]
    update?: MapImageTagUpdateWithWhereUniqueWithoutMapImageInput | MapImageTagUpdateWithWhereUniqueWithoutMapImageInput[]
    updateMany?: MapImageTagUpdateManyWithWhereWithoutMapImageInput | MapImageTagUpdateManyWithWhereWithoutMapImageInput[]
    deleteMany?: MapImageTagScalarWhereInput | MapImageTagScalarWhereInput[]
  }

  export type MapImageTagUncheckedUpdateManyWithoutMapImageNestedInput = {
    create?: XOR<MapImageTagCreateWithoutMapImageInput, MapImageTagUncheckedCreateWithoutMapImageInput> | MapImageTagCreateWithoutMapImageInput[] | MapImageTagUncheckedCreateWithoutMapImageInput[]
    connectOrCreate?: MapImageTagCreateOrConnectWithoutMapImageInput | MapImageTagCreateOrConnectWithoutMapImageInput[]
    upsert?: MapImageTagUpsertWithWhereUniqueWithoutMapImageInput | MapImageTagUpsertWithWhereUniqueWithoutMapImageInput[]
    createMany?: MapImageTagCreateManyMapImageInputEnvelope
    set?: MapImageTagWhereUniqueInput | MapImageTagWhereUniqueInput[]
    disconnect?: MapImageTagWhereUniqueInput | MapImageTagWhereUniqueInput[]
    delete?: MapImageTagWhereUniqueInput | MapImageTagWhereUniqueInput[]
    connect?: MapImageTagWhereUniqueInput | MapImageTagWhereUniqueInput[]
    update?: MapImageTagUpdateWithWhereUniqueWithoutMapImageInput | MapImageTagUpdateWithWhereUniqueWithoutMapImageInput[]
    updateMany?: MapImageTagUpdateManyWithWhereWithoutMapImageInput | MapImageTagUpdateManyWithWhereWithoutMapImageInput[]
    deleteMany?: MapImageTagScalarWhereInput | MapImageTagScalarWhereInput[]
  }

  export type MapImageTagCreateNestedManyWithoutTagInput = {
    create?: XOR<MapImageTagCreateWithoutTagInput, MapImageTagUncheckedCreateWithoutTagInput> | MapImageTagCreateWithoutTagInput[] | MapImageTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: MapImageTagCreateOrConnectWithoutTagInput | MapImageTagCreateOrConnectWithoutTagInput[]
    createMany?: MapImageTagCreateManyTagInputEnvelope
    connect?: MapImageTagWhereUniqueInput | MapImageTagWhereUniqueInput[]
  }

  export type MapImageTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<MapImageTagCreateWithoutTagInput, MapImageTagUncheckedCreateWithoutTagInput> | MapImageTagCreateWithoutTagInput[] | MapImageTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: MapImageTagCreateOrConnectWithoutTagInput | MapImageTagCreateOrConnectWithoutTagInput[]
    createMany?: MapImageTagCreateManyTagInputEnvelope
    connect?: MapImageTagWhereUniqueInput | MapImageTagWhereUniqueInput[]
  }

  export type MapImageTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<MapImageTagCreateWithoutTagInput, MapImageTagUncheckedCreateWithoutTagInput> | MapImageTagCreateWithoutTagInput[] | MapImageTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: MapImageTagCreateOrConnectWithoutTagInput | MapImageTagCreateOrConnectWithoutTagInput[]
    upsert?: MapImageTagUpsertWithWhereUniqueWithoutTagInput | MapImageTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: MapImageTagCreateManyTagInputEnvelope
    set?: MapImageTagWhereUniqueInput | MapImageTagWhereUniqueInput[]
    disconnect?: MapImageTagWhereUniqueInput | MapImageTagWhereUniqueInput[]
    delete?: MapImageTagWhereUniqueInput | MapImageTagWhereUniqueInput[]
    connect?: MapImageTagWhereUniqueInput | MapImageTagWhereUniqueInput[]
    update?: MapImageTagUpdateWithWhereUniqueWithoutTagInput | MapImageTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: MapImageTagUpdateManyWithWhereWithoutTagInput | MapImageTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: MapImageTagScalarWhereInput | MapImageTagScalarWhereInput[]
  }

  export type MapImageTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<MapImageTagCreateWithoutTagInput, MapImageTagUncheckedCreateWithoutTagInput> | MapImageTagCreateWithoutTagInput[] | MapImageTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: MapImageTagCreateOrConnectWithoutTagInput | MapImageTagCreateOrConnectWithoutTagInput[]
    upsert?: MapImageTagUpsertWithWhereUniqueWithoutTagInput | MapImageTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: MapImageTagCreateManyTagInputEnvelope
    set?: MapImageTagWhereUniqueInput | MapImageTagWhereUniqueInput[]
    disconnect?: MapImageTagWhereUniqueInput | MapImageTagWhereUniqueInput[]
    delete?: MapImageTagWhereUniqueInput | MapImageTagWhereUniqueInput[]
    connect?: MapImageTagWhereUniqueInput | MapImageTagWhereUniqueInput[]
    update?: MapImageTagUpdateWithWhereUniqueWithoutTagInput | MapImageTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: MapImageTagUpdateManyWithWhereWithoutTagInput | MapImageTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: MapImageTagScalarWhereInput | MapImageTagScalarWhereInput[]
  }

  export type MapImageCreateNestedOneWithoutTagsInput = {
    create?: XOR<MapImageCreateWithoutTagsInput, MapImageUncheckedCreateWithoutTagsInput>
    connectOrCreate?: MapImageCreateOrConnectWithoutTagsInput
    connect?: MapImageWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutMapImageTagInput = {
    create?: XOR<TagCreateWithoutMapImageTagInput, TagUncheckedCreateWithoutMapImageTagInput>
    connectOrCreate?: TagCreateOrConnectWithoutMapImageTagInput
    connect?: TagWhereUniqueInput
  }

  export type MapImageUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<MapImageCreateWithoutTagsInput, MapImageUncheckedCreateWithoutTagsInput>
    connectOrCreate?: MapImageCreateOrConnectWithoutTagsInput
    upsert?: MapImageUpsertWithoutTagsInput
    connect?: MapImageWhereUniqueInput
    update?: XOR<XOR<MapImageUpdateToOneWithWhereWithoutTagsInput, MapImageUpdateWithoutTagsInput>, MapImageUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutMapImageTagNestedInput = {
    create?: XOR<TagCreateWithoutMapImageTagInput, TagUncheckedCreateWithoutMapImageTagInput>
    connectOrCreate?: TagCreateOrConnectWithoutMapImageTagInput
    upsert?: TagUpsertWithoutMapImageTagInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutMapImageTagInput, TagUpdateWithoutMapImageTagInput>, TagUncheckedUpdateWithoutMapImageTagInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MapLocationCreateWithoutUserInput = {
    id?: string
    name: string
    lat: number
    lng: number
    description?: string | null
    createdAt?: Date | string
  }

  export type MapLocationUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    lat: number
    lng: number
    description?: string | null
    createdAt?: Date | string
  }

  export type MapLocationCreateOrConnectWithoutUserInput = {
    where: MapLocationWhereUniqueInput
    create: XOR<MapLocationCreateWithoutUserInput, MapLocationUncheckedCreateWithoutUserInput>
  }

  export type MapLocationCreateManyUserInputEnvelope = {
    data: MapLocationCreateManyUserInput | MapLocationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MapImageCreateWithoutUserInput = {
    id?: string
    eventName: string
    mapLocationId: string
    imageUrl: string
    date: Date | string
    comment: string
    memo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: MapImageTagCreateNestedManyWithoutMapImageInput
  }

  export type MapImageUncheckedCreateWithoutUserInput = {
    id?: string
    eventName: string
    mapLocationId: string
    imageUrl: string
    date: Date | string
    comment: string
    memo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: MapImageTagUncheckedCreateNestedManyWithoutMapImageInput
  }

  export type MapImageCreateOrConnectWithoutUserInput = {
    where: MapImageWhereUniqueInput
    create: XOR<MapImageCreateWithoutUserInput, MapImageUncheckedCreateWithoutUserInput>
  }

  export type MapImageCreateManyUserInputEnvelope = {
    data: MapImageCreateManyUserInput | MapImageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MapLocationUpsertWithWhereUniqueWithoutUserInput = {
    where: MapLocationWhereUniqueInput
    update: XOR<MapLocationUpdateWithoutUserInput, MapLocationUncheckedUpdateWithoutUserInput>
    create: XOR<MapLocationCreateWithoutUserInput, MapLocationUncheckedCreateWithoutUserInput>
  }

  export type MapLocationUpdateWithWhereUniqueWithoutUserInput = {
    where: MapLocationWhereUniqueInput
    data: XOR<MapLocationUpdateWithoutUserInput, MapLocationUncheckedUpdateWithoutUserInput>
  }

  export type MapLocationUpdateManyWithWhereWithoutUserInput = {
    where: MapLocationScalarWhereInput
    data: XOR<MapLocationUpdateManyMutationInput, MapLocationUncheckedUpdateManyWithoutUserInput>
  }

  export type MapLocationScalarWhereInput = {
    AND?: MapLocationScalarWhereInput | MapLocationScalarWhereInput[]
    OR?: MapLocationScalarWhereInput[]
    NOT?: MapLocationScalarWhereInput | MapLocationScalarWhereInput[]
    id?: StringFilter<"MapLocation"> | string
    name?: StringFilter<"MapLocation"> | string
    lat?: FloatFilter<"MapLocation"> | number
    lng?: FloatFilter<"MapLocation"> | number
    description?: StringNullableFilter<"MapLocation"> | string | null
    userId?: StringFilter<"MapLocation"> | string
    createdAt?: DateTimeFilter<"MapLocation"> | Date | string
  }

  export type MapImageUpsertWithWhereUniqueWithoutUserInput = {
    where: MapImageWhereUniqueInput
    update: XOR<MapImageUpdateWithoutUserInput, MapImageUncheckedUpdateWithoutUserInput>
    create: XOR<MapImageCreateWithoutUserInput, MapImageUncheckedCreateWithoutUserInput>
  }

  export type MapImageUpdateWithWhereUniqueWithoutUserInput = {
    where: MapImageWhereUniqueInput
    data: XOR<MapImageUpdateWithoutUserInput, MapImageUncheckedUpdateWithoutUserInput>
  }

  export type MapImageUpdateManyWithWhereWithoutUserInput = {
    where: MapImageScalarWhereInput
    data: XOR<MapImageUpdateManyMutationInput, MapImageUncheckedUpdateManyWithoutUserInput>
  }

  export type MapImageScalarWhereInput = {
    AND?: MapImageScalarWhereInput | MapImageScalarWhereInput[]
    OR?: MapImageScalarWhereInput[]
    NOT?: MapImageScalarWhereInput | MapImageScalarWhereInput[]
    id?: StringFilter<"MapImage"> | string
    eventName?: StringFilter<"MapImage"> | string
    mapLocationId?: StringFilter<"MapImage"> | string
    imageUrl?: StringFilter<"MapImage"> | string
    date?: DateTimeFilter<"MapImage"> | Date | string
    comment?: StringFilter<"MapImage"> | string
    memo?: StringFilter<"MapImage"> | string
    createdAt?: DateTimeFilter<"MapImage"> | Date | string
    updatedAt?: DateTimeFilter<"MapImage"> | Date | string
    userId?: StringFilter<"MapImage"> | string
  }

  export type UserCreateWithoutMapLocationsInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role | null
    mapImages?: MapImageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMapLocationsInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role | null
    mapImages?: MapImageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMapLocationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMapLocationsInput, UserUncheckedCreateWithoutMapLocationsInput>
  }

  export type UserUpsertWithoutMapLocationsInput = {
    update: XOR<UserUpdateWithoutMapLocationsInput, UserUncheckedUpdateWithoutMapLocationsInput>
    create: XOR<UserCreateWithoutMapLocationsInput, UserUncheckedCreateWithoutMapLocationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMapLocationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMapLocationsInput, UserUncheckedUpdateWithoutMapLocationsInput>
  }

  export type UserUpdateWithoutMapLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    mapImages?: MapImageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMapLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    mapImages?: MapImageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMapImagesInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role | null
    mapLocations?: MapLocationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMapImagesInput = {
    id?: string
    googleId: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role | null
    mapLocations?: MapLocationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMapImagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMapImagesInput, UserUncheckedCreateWithoutMapImagesInput>
  }

  export type MapImageTagCreateWithoutMapImageInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    tag: TagCreateNestedOneWithoutMapImageTagInput
  }

  export type MapImageTagUncheckedCreateWithoutMapImageInput = {
    tagId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapImageTagCreateOrConnectWithoutMapImageInput = {
    where: MapImageTagWhereUniqueInput
    create: XOR<MapImageTagCreateWithoutMapImageInput, MapImageTagUncheckedCreateWithoutMapImageInput>
  }

  export type MapImageTagCreateManyMapImageInputEnvelope = {
    data: MapImageTagCreateManyMapImageInput | MapImageTagCreateManyMapImageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMapImagesInput = {
    update: XOR<UserUpdateWithoutMapImagesInput, UserUncheckedUpdateWithoutMapImagesInput>
    create: XOR<UserCreateWithoutMapImagesInput, UserUncheckedCreateWithoutMapImagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMapImagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMapImagesInput, UserUncheckedUpdateWithoutMapImagesInput>
  }

  export type UserUpdateWithoutMapImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    mapLocations?: MapLocationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMapImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    mapLocations?: MapLocationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MapImageTagUpsertWithWhereUniqueWithoutMapImageInput = {
    where: MapImageTagWhereUniqueInput
    update: XOR<MapImageTagUpdateWithoutMapImageInput, MapImageTagUncheckedUpdateWithoutMapImageInput>
    create: XOR<MapImageTagCreateWithoutMapImageInput, MapImageTagUncheckedCreateWithoutMapImageInput>
  }

  export type MapImageTagUpdateWithWhereUniqueWithoutMapImageInput = {
    where: MapImageTagWhereUniqueInput
    data: XOR<MapImageTagUpdateWithoutMapImageInput, MapImageTagUncheckedUpdateWithoutMapImageInput>
  }

  export type MapImageTagUpdateManyWithWhereWithoutMapImageInput = {
    where: MapImageTagScalarWhereInput
    data: XOR<MapImageTagUpdateManyMutationInput, MapImageTagUncheckedUpdateManyWithoutMapImageInput>
  }

  export type MapImageTagScalarWhereInput = {
    AND?: MapImageTagScalarWhereInput | MapImageTagScalarWhereInput[]
    OR?: MapImageTagScalarWhereInput[]
    NOT?: MapImageTagScalarWhereInput | MapImageTagScalarWhereInput[]
    mapImageId?: StringFilter<"MapImageTag"> | string
    tagId?: StringFilter<"MapImageTag"> | string
    createdAt?: DateTimeFilter<"MapImageTag"> | Date | string
    updatedAt?: DateTimeFilter<"MapImageTag"> | Date | string
  }

  export type MapImageTagCreateWithoutTagInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    mapImage: MapImageCreateNestedOneWithoutTagsInput
  }

  export type MapImageTagUncheckedCreateWithoutTagInput = {
    mapImageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapImageTagCreateOrConnectWithoutTagInput = {
    where: MapImageTagWhereUniqueInput
    create: XOR<MapImageTagCreateWithoutTagInput, MapImageTagUncheckedCreateWithoutTagInput>
  }

  export type MapImageTagCreateManyTagInputEnvelope = {
    data: MapImageTagCreateManyTagInput | MapImageTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type MapImageTagUpsertWithWhereUniqueWithoutTagInput = {
    where: MapImageTagWhereUniqueInput
    update: XOR<MapImageTagUpdateWithoutTagInput, MapImageTagUncheckedUpdateWithoutTagInput>
    create: XOR<MapImageTagCreateWithoutTagInput, MapImageTagUncheckedCreateWithoutTagInput>
  }

  export type MapImageTagUpdateWithWhereUniqueWithoutTagInput = {
    where: MapImageTagWhereUniqueInput
    data: XOR<MapImageTagUpdateWithoutTagInput, MapImageTagUncheckedUpdateWithoutTagInput>
  }

  export type MapImageTagUpdateManyWithWhereWithoutTagInput = {
    where: MapImageTagScalarWhereInput
    data: XOR<MapImageTagUpdateManyMutationInput, MapImageTagUncheckedUpdateManyWithoutTagInput>
  }

  export type MapImageCreateWithoutTagsInput = {
    id?: string
    eventName: string
    mapLocationId: string
    imageUrl: string
    date: Date | string
    comment: string
    memo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMapImagesInput
  }

  export type MapImageUncheckedCreateWithoutTagsInput = {
    id?: string
    eventName: string
    mapLocationId: string
    imageUrl: string
    date: Date | string
    comment: string
    memo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type MapImageCreateOrConnectWithoutTagsInput = {
    where: MapImageWhereUniqueInput
    create: XOR<MapImageCreateWithoutTagsInput, MapImageUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutMapImageTagInput = {
    id?: string
    name: string
  }

  export type TagUncheckedCreateWithoutMapImageTagInput = {
    id?: string
    name: string
  }

  export type TagCreateOrConnectWithoutMapImageTagInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutMapImageTagInput, TagUncheckedCreateWithoutMapImageTagInput>
  }

  export type MapImageUpsertWithoutTagsInput = {
    update: XOR<MapImageUpdateWithoutTagsInput, MapImageUncheckedUpdateWithoutTagsInput>
    create: XOR<MapImageCreateWithoutTagsInput, MapImageUncheckedCreateWithoutTagsInput>
    where?: MapImageWhereInput
  }

  export type MapImageUpdateToOneWithWhereWithoutTagsInput = {
    where?: MapImageWhereInput
    data: XOR<MapImageUpdateWithoutTagsInput, MapImageUncheckedUpdateWithoutTagsInput>
  }

  export type MapImageUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    mapLocationId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    memo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMapImagesNestedInput
  }

  export type MapImageUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    mapLocationId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    memo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TagUpsertWithoutMapImageTagInput = {
    update: XOR<TagUpdateWithoutMapImageTagInput, TagUncheckedUpdateWithoutMapImageTagInput>
    create: XOR<TagCreateWithoutMapImageTagInput, TagUncheckedCreateWithoutMapImageTagInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutMapImageTagInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutMapImageTagInput, TagUncheckedUpdateWithoutMapImageTagInput>
  }

  export type TagUpdateWithoutMapImageTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutMapImageTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MapLocationCreateManyUserInput = {
    id?: string
    name: string
    lat: number
    lng: number
    description?: string | null
    createdAt?: Date | string
  }

  export type MapImageCreateManyUserInput = {
    id?: string
    eventName: string
    mapLocationId: string
    imageUrl: string
    date: Date | string
    comment: string
    memo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapLocationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapLocationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapLocationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapImageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    mapLocationId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    memo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: MapImageTagUpdateManyWithoutMapImageNestedInput
  }

  export type MapImageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    mapLocationId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    memo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: MapImageTagUncheckedUpdateManyWithoutMapImageNestedInput
  }

  export type MapImageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    mapLocationId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    memo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapImageTagCreateManyMapImageInput = {
    tagId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapImageTagUpdateWithoutMapImageInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUpdateOneRequiredWithoutMapImageTagNestedInput
  }

  export type MapImageTagUncheckedUpdateWithoutMapImageInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapImageTagUncheckedUpdateManyWithoutMapImageInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapImageTagCreateManyTagInput = {
    mapImageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapImageTagUpdateWithoutTagInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mapImage?: MapImageUpdateOneRequiredWithoutTagsNestedInput
  }

  export type MapImageTagUncheckedUpdateWithoutTagInput = {
    mapImageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapImageTagUncheckedUpdateManyWithoutTagInput = {
    mapImageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}