
# EasyError 🚨

EasyError is a lightweight TypeScript library for handling Either types and custom errors design for express.
manage your errors without importing or drilling with your res :)

## Project Prerequisites ⚙️

- ![Node.js](https://img.shields.io/badge/Node.js-v14-green)
- ![npm](https://img.shields.io/badge/npm-v7-blue)
- ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-latest-blueviolet)
  

## Installation 📦

```bash
npm install easy-error-ts
```

## Usage 🚀

### Importing 🔗

```typescript
import { CustomError, Left, Right, Either, left, right } from 'easy-error-ts';
```

### Creating Either instances 🔧

#### Creating a Left instance

```typescript
const leftValue: Left<number> = left(42);
```

#### Creating a Right instance

```typescript
const rightValue: Right<CustomError> = right(500, 'Internal Server Error');
```

### Working with Either instances 🛠️

easy to use contains only an Either type for your return and a left and right functions
the left is for the good result and the right is for the error.
Either is only a type for your return or others.

```typescript

const fetchMyData = async () : Promise<EasyEither<unknown>> => {
 try {
    const req = await fetch(
        `https://toto.com/api`
    );
    if (!req.ok) {
      return right(500 , `Error message`)
    }
    return left(await req.json())
  } catch (error) {
    return right(500 , `Error message`)
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown | CustomError>
) {

  const dataOrError = await fetchMyData();

  const [data, error] = dataOrError;
  return data !== undefined
    ? res.status(200).json({ data })
    : res.status(error?.code ?? 500).json(error ?? { message: 'Internal Server Error' });
}

```

## Contributing 🤝

We welcome contributions! Feel free to open issues or pull requests.

## License 📝

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
