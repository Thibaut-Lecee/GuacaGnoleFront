import React from 'react';
import {faker} from '@faker-js/faker';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {Body, BodyGraph, Container} from "./cardStyles";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Top Selling Products',
        },
        width: "90%",
    },
};

const labels = ['Champagne', 'Blanc', 'Rosé', 'Rouge'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Top Wines Sold',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 , precision: 0.01})),
            backgroundColor: labels.map(() => faker.internet.color()),
        },
    ],
};

const CardGraphique = () => {
    return(
        <Container>
            <BodyGraph>
            <Bar options={options} data={data}  />
            </BodyGraph>
        </Container>

    )
}
export default CardGraphique;