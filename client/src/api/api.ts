import { Car, CarEngine, CreateCar, UpdateCar, Winner } from '../interfaces';

const baseUrl = 'http://localhost:3000';

export const getAllWinners = async (
  page: number,
  sort = 'time',
  order = 'ASC',
  limit = 10,
): Promise<{ result: Winner[]; totalCount: string }> => {
  try {
    const data = await fetch(
      `${baseUrl}/winners?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`,
    );
    const res: Winner[] = await data.json();

    return {
      result: res,
      totalCount: data.headers.get('X-Total-Count') || '0',
    };
  } catch (err) {
    throw new Error(err as string);
  }
};

export const getWinner = async (
  winnerId: number,
): Promise<{ status: number; result: Winner }> => {
  try {
    const data = await fetch(`${baseUrl}/winners/${winnerId}`);
    const res: Winner = await data.json();

    return {
      status: data.status,
      result: res,
    };
  } catch (err) {
    throw new Error(err as string);
  }
};

export const createWinner = async (carData: Winner): Promise<number> => {
  try {
    const data = await fetch(`${baseUrl}/winners`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carData),
    });

    return data.status;
  } catch (err) {
    throw new Error(err as string);
  }
};

export const updateWinner = async (carData: Winner): Promise<void> => {
  try {
    await fetch(`${baseUrl}/winners/${carData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carData),
    });
  } catch (err) {
    throw new Error(err as string);
  }
};

export const deleteWinner = async (carId: number): Promise<void> => {
  try {
    await fetch(`${baseUrl}/winners/${carId}`, {
      method: 'DELETE',
    });
  } catch (err) {
    throw new Error(err as string);
  }
};

export const getAllCars = async (
  page = 1,
  limit = 7,
): Promise<{ cars: Car[]; count: string } | null> => {
  try {
    const data = await fetch(`${baseUrl}/garage?_limit=${limit}&_page=${page}`);
    const res: Car[] = await data.json();

    if (data.status === 200) {
      return {
        cars: res,
        count: data.headers.get('X-Total-Count') || '0',
      };
    }

    return null;
  } catch (err) {
    throw new Error(err as string);
  }
};

export const getCar = async (carId: number): Promise<Car | null> => {
  try {
    const data = await fetch(`${baseUrl}/garage/${carId}`);
    const res: Car = await data.json();

    if (data.status === 200) {
      return res;
    }

    return null;
  } catch (err) {
    throw new Error(err as string);
  }
};

export const updateCar = async (car: UpdateCar): Promise<void> => {
  try {
    await fetch(`${baseUrl}/garage/${car.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });
  } catch (err) {
    throw new Error(err as string);
  }
};

export const createCar = async (car: CreateCar): Promise<void> => {
  try {
    await fetch(`${baseUrl}/garage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });
  } catch (err) {
    throw new Error(err as string);
  }
};

export const deleteCar = async (carId: number): Promise<void> => {
  try {
    await fetch(`${baseUrl}/garage/${carId}`, {
      method: 'DELETE',
    });
  } catch (err) {
    throw new Error(err as string);
  }
};

export const startEngineCar = async (
  carId: number,
): Promise<{ status: number; result: CarEngine }> => {
  try {
    const data = await fetch(`${baseUrl}/engine?id=${carId}&status=started`, {
      method: 'PATCH',
    });
    const res: CarEngine = await data.json();

    return {
      status: data.status,
      result: res,
    };
  } catch (err) {
    throw new Error(err as string);
  }
};

export const stopEngineCar = async (
  carId: number,
): Promise<{ status: number; result: CarEngine }> => {
  try {
    const data = await fetch(`${baseUrl}/engine?id=${carId}&status=stopped`, {
      method: 'PATCH',
    });
    const res: CarEngine = await data.json();

    return {
      status: data.status,
      result: res,
    };
  } catch (err) {
    throw new Error(err as string);
  }
};

export const switchToDriveMode = async (carId: number): Promise<number> => {
  try {
    const data = await fetch(`${baseUrl}/engine?id=${carId}&status=drive`, {
      method: 'PATCH',
    });

    return data.status;
  } catch (err) {
    throw new Error(err as string);
  }
};
