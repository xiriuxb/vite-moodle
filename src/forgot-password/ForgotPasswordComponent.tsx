import { yupResolver } from "@hookform/resolvers/yup";
import { TForgotInput, forgotPasswordSchema } from "./forgotPasswordSchema";
import { SubmitHandler, useForm } from "react-hook-form";

export function FrogotPasswordComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TForgotInput>({ resolver: yupResolver(forgotPasswordSchema) });

  const handlePost: SubmitHandler<TForgotInput> = (data: TForgotInput) => {};

  return (
    <form
      className="w-5/6 my-16 p-3 self-center max-w-96"
      onSubmit={handleSubmit(handlePost)}
    >
      {!!errors && (
        <div className="bg-red-300 text-indigo-950">
          {errors.userEmail?.message}
        </div>
      )}
      <div className="form-group text-indigo-950">
        <label>Correo electrónico:</label>
        <input type="email" name="" id="" />
      </div>
      <input
        {...register("userEmail", { required: true })}
        className="w-full mt-3 py-3 bg-indigo-600 text-slate-50 font-bold rounded-lg shadow-lg"
        type="submit"
        value="Enviar"
      />
    </form>
  );
}
