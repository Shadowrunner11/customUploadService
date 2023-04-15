export const getEnvOrThrows = (envName:string) => {
  const envValue = process.env[envName]
  if(!envValue)
    throw new Error(`Enviroment not found ${envName}`);

  return envValue
    
}
