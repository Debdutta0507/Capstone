import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Alloperations from '../CRUD/Alloperations';

ChartJS.register(ArcElement, Tooltip, Legend);

const Cust = () => {
    const data = {
        labels: [],
        datasets: [
            {
                label: '# of Votes',
                data: [],
                backgroundColor: [],
                borderColor: [],
                borderWidth: 1,
            },
        ],
    };

    const [chartData, setChartData] = useState(data);
    useEffect(() => {
        Alloperations.getAllProducts().then(resp => {
            const newLabels = resp && resp.map(item => item.proName);
            const newData = resp && resp.map(item => item.count);
            const backgroundColor = [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ]
            const borderColor = [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ]
            console.log(newLabels, newData);
            setChartData(prev => ({
                ...prev, labels: newLabels,
                datasets: [{
                    data: newData,
                    backgroundColor: backgroundColor,
                    borderColor: borderColor
                }]
            }));
        })
    }, [])

    return (
        <><div className="container mt-3">
            <div className="row">
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <Doughnut data={chartData} options={{
                        responsive: true,
                        maintainAspectRatio: true,
                    }} />
                </div>
            </div>
        </div></>
    )
}

export default Cust;