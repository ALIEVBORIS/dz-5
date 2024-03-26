import React from 'react';
import styles from './FilterPage.module.css';

const FilterPage = () => {
	return (
		<u className={styles.cont}>
			<li>
				<a href='https://starwars-visualguide.com/#/characters?page=1'>
                Characters
				</a>
			</li>
			<li>
				<a href='https://starwars-visualguide.com/#/films?page=1'>Films</a>
			</li>
			<li>
				<a href='https://starwars-visualguide.com/#/species?page=1'>
                Species
				</a>
			</li>
			<li>
				<a href='https://starwars-visualguide.com/#/starships?page=1'>
                Starships
				</a>
			</li>
			<li>
				<a href='https://starwars-visualguide.com/#/vehicles?page=1'>
                Vehicles
				</a>
			</li>
			<li>
				<a href='https://starwars-visualguide.com/#/planets?page=1'>
                Planets
				</a>
			</li>
		</u>
	);
};

export default FilterPage;
