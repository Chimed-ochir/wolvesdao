import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ReactElement, useMemo } from 'react';

type LinkProps = NextLinkProps & {
	children: ReactElement;
	target?: string;
	w?: '100%' | 'fit-content';
	query?: any;
};

export const Link = ({
	w = '100%',
	children,
	href,
	query = [],
	...props
}: LinkProps) => {
	const _href = useMemo(
		() => `${href}${query ? '?' : ''}${new URLSearchParams(query)}`,
		[href, query]
	);
	return (
		<NextLink
			style={{ width: w, cursor: 'pointer !important' }}
			href={_href}
			{...props}
		>
			{children}
		</NextLink>
	);
};
