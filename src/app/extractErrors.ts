export function extractErrors(obj: any): string[] {
  const err = obj.error;

  let mensajesDeError: string[] = [];

  for (let campo in err) {
    const mensajesConCampos = err[campo].map(
      (mensaje: string) => `${campo}: ${mensaje}`
    );
    mensajesDeError = mensajesDeError.concat(mensajesConCampos);
  }

  return mensajesDeError;
}
