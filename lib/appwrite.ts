import {
    Account,
    Avatars,
    Client,
    Databases,
    ID,
    Query,
} from "react-native-appwrite";

export const config = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
  databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!,
  userCollectionId: process.env.EXPO_PUBLIC_APPWRITE_USER_COLLECTION_ID!,
};

const client = new Client();
client.setEndpoint(config.endpoint).setProject(config.projectId);

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);

// Регистрация
export const createUser = async (
  email: string,
  password: string,
  name: string,
) => {
  const newAccount = await account.create(ID.unique(), email, password, name);
  if (!newAccount) throw new Error("Failed to create account");

  const avatarUrl = avatars.getInitials(name);
  await signIn(email, password);

  const newUser = await databases.createDocument(
    config.databaseId,
    config.userCollectionId,
    ID.unique(),
    {
      accountId: newAccount.$id,
      email,
      name,
      avatar: avatarUrl,
    },
  );
  return newUser;
};

// Вход
export const signIn = async (email: string, password: string) => {
  const session = await account.createEmailPasswordSession(email, password);
  return session;
};

// Выход
export const signOut = async () => {
  await account.deleteSession("current");
};

// Текущий пользователь
export const getCurrentUser = async () => {
  const currentAccount = await account.get();
  if (!currentAccount) throw new Error("No current account");

  const currentUser = await databases.listDocuments(
    config.databaseId,
    config.userCollectionId,
    [Query.equal("accountId", currentAccount.$id)],
  );

  if (!currentUser.documents.length) throw new Error("No user found");
  return currentUser.documents[0];
};
