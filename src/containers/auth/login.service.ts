// import { useMutation } from 'react-query';
// import { axios } from '@/lib/axios';

// const login = (body: any) => axios.post('/v1/auth/signin', body);

// export const useLogin = (
// 	onSuccess: (data: any, values: any) => any,
// 	onError: (error: any) => any
// ) => {
// 	const { mutateAsync, isLoading } = useMutation(
// 		['useLogin'],
// 		(body: any) => login(body),
// 		{ onSuccess, onError }
// 	);

// 	return {
// 		login: mutateAsync,
// 		isLoginLoading: isLoading,
// 	};
// };
