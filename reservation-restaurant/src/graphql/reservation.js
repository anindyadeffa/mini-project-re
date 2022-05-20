import gql from "graphql-tag";

export const ADD_RESERVATION = gql`
	mutation insertReservation(
		$name: String!
		$email: String!
		$type: String!
		$date: date!
		$time: time!
	)
    {
		insert_reservation(
			objects: [
				{
					name: $name
					email: $email
					type: $type
					date: $date
					time: $time
				}
			]
		) {
			returning {
				id
				name
			}
		}
	}
`;