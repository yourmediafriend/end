import React from 'react';
import { create } from "react-test-renderer";

import ReactDOM from 'react-dom';
import Link from './Link';


describe("Link component", () => {

	test("Matches the snapshot", () => {
		const link = create(<Link />);
		expect(link.toJSON()).toMatchSnapshot();
	

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Link />, div);
		ReactDOM.unmountComponentAtNode(div);
	})

})