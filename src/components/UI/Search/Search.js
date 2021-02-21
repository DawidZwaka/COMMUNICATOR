/*

██╗███╗   ███╗██████╗  ██████╗ ██████╗ ████████╗███████╗
██║████╗ ████║██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝
██║██╔████╔██║██████╔╝██║   ██║██████╔╝   ██║   ███████╗
██║██║╚██╔╝██║██╔═══╝ ██║   ██║██╔══██╗   ██║   ╚════██║
██║██║ ╚═╝ ██║██║     ╚██████╔╝██║  ██║   ██║   ███████║
╚═╝╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝
                                                        
*/

import React, { PureComponent } from 'react';
import axios from '../../../util/axios';
import Input from '../../../components/UI/Input/Input';

class Search extends PureComponent {
	delay = timeout =>
		new Promise((resolve, reject) => setTimeout(resolve, timeout));

	updateInputState = async ev => {
		ev.persist();
		const prevVal = ev.target.value;

		await this.delay(1500);

		const currVal = ev.target.value;

		if (prevVal === currVal) {
			const friends = await axios.get('/communicator/contact');
			console.log(friends);
		}
	};

	render() {
		return <Input onChange={this.updateInputState} />;
	}
}

export default Search;
