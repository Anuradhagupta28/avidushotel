// React Hooks
import { useContext } from 'react';

// Contexts
import { ModalsControllerContext } from '../contexts/ModalsControllerContext';
import { UserContext } from './../contexts/UserContext';

import { useDisclosure,Modal,ModalOverlay,ModalContent ,Button,Input,FormControl,FormLabel,ModalFooter,ModalHeader,ModalCloseButton,ModalBody} from '@chakra-ui/react'
import * as React from 'react'

import Signup from "./Signup";
import Signin from "./Signin"

export const UserIcon = () => {
	const { currentUser } = useContext(UserContext);
	const { setToggleUserBookingsView } = useContext(ModalsControllerContext);

	return (
		<div>
		<div className='nav-item dropdown'>
			<div className='nav-link dropdown-toggle text-light' data-bs-toggle='dropdown' role='button' aria-expanded='false'>
				{currentUser.userName}
			</div>
			<ul className='dropdown-menu' style={{ minWidth: 'fit-content' }}>
				<li>
					<a
						className='dropdown-item'
						href='#bookingsList'
						onClick={() => {
							setToggleUserBookingsView(true);
						}}>
						Bookings list
					</a>

					
					<Signup/>
					<Signin/>
				</li>
			</ul>
		</div>
		</div>
	);
};
