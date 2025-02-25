/* tslint:disable */
/* eslint-disable */
/**
/* This file was automatically generated from pydantic models by running pydantic2ts.
/* Do not modify it by hand - just update the pydantic models and then re-run the script
*/

export type AuthMethod = "Mealie" | "LDAP";

export interface ChangePassword {
  currentPassword: string;
  newPassword: string;
}
export interface CreateToken {
  name: string;
  integrationId?: string;
  userId: string;
  token: string;
}
export interface CreateUserRegistration {
  group?: string;
  groupToken?: string;
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
  advanced?: boolean;
  private?: boolean;
  seedData?: boolean;
  locale?: string;
}
export interface DeleteTokenResponse {
  tokenDelete: string;
}
export interface ForgotPassword {
  email: string;
}
export interface GroupBase {
  name: string;
}
export interface GroupInDB {
  name: string;
  id: string;
  slug: string;
  categories?: CategoryBase[];
  webhooks?: unknown[];
  users?: UserOut[];
  preferences?: ReadGroupPreferences;
}
export interface CategoryBase {
  name: string;
  id: string;
  slug: string;
}
export interface UserOut {
  username?: string;
  fullName?: string;
  email: string;
  authMethod?: AuthMethod & string;
  admin?: boolean;
  group: string;
  advanced?: boolean;
  favoriteRecipes?: string[];
  canInvite?: boolean;
  canManage?: boolean;
  canOrganize?: boolean;
  id: string;
  groupId: string;
  groupSlug: string;
  tokens?: LongLiveTokenOut[];
  cacheKey: string;
}
export interface LongLiveTokenOut {
  token: string;
  name: string;
  id: number;
  createdAt?: string;
}
export interface ReadGroupPreferences {
  privateGroup?: boolean;
  firstDayOfWeek?: number;
  recipePublic?: boolean;
  recipeShowNutrition?: boolean;
  recipeShowAssets?: boolean;
  recipeLandscapeView?: boolean;
  recipeDisableComments?: boolean;
  recipeDisableAmount?: boolean;
  groupId: string;
  id: string;
}
export interface LongLiveTokenIn {
  name: string;
  integrationId?: string;
}
export interface LongLiveTokenInDB {
  name: string;
  integrationId?: string;
  userId: string;
  token: string;
  id: number;
  user: PrivateUser;
}
export interface PrivateUser {
  username?: string;
  fullName?: string;
  email: string;
  authMethod?: AuthMethod & string;
  admin?: boolean;
  group: string;
  advanced?: boolean;
  favoriteRecipes?: string[];
  canInvite?: boolean;
  canManage?: boolean;
  canOrganize?: boolean;
  id: string;
  groupId: string;
  groupSlug: string;
  tokens?: LongLiveTokenOut[];
  cacheKey: string;
  password: string;
  loginAttemps?: number;
  lockedAt?: string;
}
export interface PasswordResetToken {
  token: string;
}
export interface PrivatePasswordResetToken {
  userId: string;
  token: string;
  user: PrivateUser;
}
export interface ResetPassword {
  token: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
export interface SavePasswordResetToken {
  userId: string;
  token: string;
}
export interface Token {
  access_token: string;
  token_type: string;
}
export interface TokenData {
  user_id?: string;
  username?: string;
}
export interface UnlockResults {
  unlocked?: number;
}
export interface UpdateGroup {
  name: string;
  id: string;
  slug: string;
  categories?: CategoryBase[];
  webhooks?: unknown[];
}
export interface UserBase {
  username?: string;
  fullName?: string;
  email: string;
  authMethod?: AuthMethod & string;
  admin?: boolean;
  group?: string;
  advanced?: boolean;
  favoriteRecipes?: string[];
  canInvite?: boolean;
  canManage?: boolean;
  canOrganize?: boolean;
}
export interface UserFavorites {
  username?: string;
  fullName?: string;
  email: string;
  authMethod?: AuthMethod & string;
  admin?: boolean;
  group?: string;
  advanced?: boolean;
  favoriteRecipes?: RecipeSummary[];
  canInvite?: boolean;
  canManage?: boolean;
  canOrganize?: boolean;
}
export interface RecipeSummary {
  id?: string;
  userId?: string;
  groupId?: string;
  name?: string;
  slug?: string;
  image?: unknown;
  recipeYield?: string;
  totalTime?: string;
  prepTime?: string;
  cookTime?: string;
  performTime?: string;
  description?: string;
  recipeCategory?: RecipeCategory[];
  tags?: RecipeTag[];
  tools?: RecipeTool[];
  rating?: number;
  orgURL?: string;
  dateAdded?: string;
  dateUpdated?: string;
  createdAt?: string;
  updateAt?: string;
  lastMade?: string;
}
export interface RecipeCategory {
  id?: string;
  name: string;
  slug: string;
}
export interface RecipeTag {
  id?: string;
  name: string;
  slug: string;
}
export interface RecipeTool {
  id: string;
  name: string;
  slug: string;
  onHand?: boolean;
}
export interface UserIn {
  username?: string;
  fullName?: string;
  email: string;
  authMethod?: AuthMethod & string;
  admin?: boolean;
  group?: string;
  advanced?: boolean;
  favoriteRecipes?: string[];
  canInvite?: boolean;
  canManage?: boolean;
  canOrganize?: boolean;
  password: string;
}
export interface ValidateResetToken {
  token: string;
}
