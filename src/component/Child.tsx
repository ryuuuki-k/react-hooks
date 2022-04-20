import React, { VFC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type UserForm = {
  name: string;
  email: string;
};

const Child: VFC = () => {
  const defaultValues: UserForm = { name: 'bob', email: '42@a.com' };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserForm>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues,
    // resolver: undefined,
    // context: undefined,
    criteriaMode: 'all',
    shouldFocusError: true,
    shouldUnregister: false,
    delayError: undefined,
  });

  const onSubmit: SubmitHandler<UserForm> = (data) => {
    console.log('🚀 ~ file: Child.tsx ~ line 18 ~ data', data);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...(register('name'), { required: true })} />
        <input
          {...register('email', {
            required: true,
            maxLength: 40,
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: '無効なアドレスの形式です',
            },
          })}
        />
        <div>
          <button>送信</button>
        </div>
      </form>
      {errors.email?.message && <p>{errors.email.message}</p>}
    </div>
  );
};

export default Child;
