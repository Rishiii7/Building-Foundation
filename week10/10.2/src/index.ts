import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertUser = async (
  username: string,
  password: string,
  firstName: string,
  lastName: string,
) => {
  const result = await prisma.user.create({
    data: {
      email: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
    },
  });

  console.log(result);
};

interface UpdateParams {
  firstName: string;
  lastName: string;
}

const updateUser = async (
  username: string,
  { firstName, lastName }: UpdateParams,
) => {
  const result = await prisma.user.update({
    data: {
      firstName: firstName,
      lastName: lastName,
    },
    where: {
      email: username,
    },
  });

  console.log(result);
};

const getUser = async (username: string) => {
  const result = await prisma.user.findFirst({
    where: {
      email: username,
    },
    select: {
      firstName: true,
      lastName: true,
    },
  });

  console.log(result);
};

// insertUser("admin1", "123456", "harkirat", "singh");
// updateUser("admin1", {
//   firstName: "harkirat1",
//   lastName: "signh",
// });
// getUser("admin1");
