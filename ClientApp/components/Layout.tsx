import * as React from 'react';
import { NavMenu } from './NavMenu';
import Footer from './Footer';

export interface LayoutProps {
	body: React.ReactElement<any>;
}

export class Layout extends React.Component<LayoutProps, void> {

	public render() {
		return (
			<div>
				<NavMenu />

				{
					this.props.body
				}

				<Footer />
			</div>
		);
	}
}