import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";

const URL = 'http://localhost:3001/v8'

function V8() {
    const [V8Data, setV8Data] = useState([]);
    const [V8Years, setV8Years] = useState([]);

    useEffect(() => {
        try {
            axios.get(URL)
                .then((response) => {
                    setV8Data(response.data);
                    let TempYears = response.data.map(v8 => v8.Year);
                    setV8Years(TempYears);
                });
        } catch (error) {
            console.log(error)
        }
    }, [])

    const data = {
        labels: V8Years,
        datasets: [
            {
                label: 'Afghanistan',
                data: V8Data.map(v8 => v8.Afghanistan),
                borderColor: '#000000',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Albania',
                data: V8Data.map(v8 => v8.Albania),
                borderColor: '#565051',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Algeria',
                data: V8Data.map(v8 => v8.Algeria),
                borderColor: '#8D918D',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Andorra',
                data: V8Data.map(v8 => v8.Andorra),
                borderColor: '#657383',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Angola',
                data: V8Data.map(v8 => v8.Angola),
                borderColor: '#2B547E',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Anguilla',
                data: V8Data.map(v8 => v8.Anguilla),
                borderColor: '#2B3856',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Antigua and Barbuda',
                data: V8Data.map(v8 => v8.Antigua_and_Barbuda),
                borderColor: '#151B54',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Argentina',
                data: V8Data.map(v8 => v8.Argentina),
                borderColor: '#2916F5',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Armenia',
                data: V8Data.map(v8 => v8.Armenia),
                borderColor: '#306EFF',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Aruba',
                data: V8Data.map(v8 => v8.Aruba),
                borderColor: '#56A5EC',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Australia',
                data: V8Data.map(v8 => v8.Australia),
                borderColor: '#ADDFFF',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Austria',
                data: V8Data.map(v8 => v8.Austria),
                borderColor: '#C9DFEC',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Azerbaijan',
                data: V8Data.map(v8 => v8.Azerbaijan),
                borderColor: '#C4DFFC',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Bahamas',
                data: V8Data.map(v8 => v8.Bahamas),
                borderColor: '#7DFDFE',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Bahrain',
                data: V8Data.map(v8 => v8.Bahrain),
                borderColor: '#4EE2EC',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Bangladesh',
                data: V8Data.map(v8 => v8.Bangladesh),
                borderColor: '#CFECEC',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Barbados',
                data: V8Data.map(v8 => v8.Barbados),
                borderColor: '#92C7C7',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Belarus',
                data: V8Data.map(v8 => v8.Belarus),
                borderColor: '#AAF0D1',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Belgium',
                data: V8Data.map(v8 => v8.Belgium),
                borderColor: '#46C7C7',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Belize',
                data: V8Data.map(v8 => v8.Belize),
                borderColor: '#5F9EA0',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Benin',
                data: V8Data.map(v8 => v8.Benin),
                borderColor: '#045F5F',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Bermuda',
                data: V8Data.map(v8 => v8.Bermuda),
                borderColor: '#3C565B',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Bhutan',
                data: V8Data.map(v8 => v8.Bhutan),
                borderColor: '#31906E',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Bonaire. Saint Eustatius and Saba',
                data: V8Data.map(v8 => v8.Bonaire_Saint_Eustatius_and_Saba),
                borderColor: '#7C9D8E',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Bosnia and Herzegovina',
                data: V8Data.map(v8 => v8.Bosnia_and_Herzegovina),
                borderColor: '#728C00',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Botswana',
                data: V8Data.map(v8 => v8.Botswana),
                borderColor: '#4E9258',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Brazil',
                data: V8Data.map(v8 => v8.Brazil),
                borderColor: '#006400',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'British Virgin Islands',
                data: V8Data.map(v8 => v8.British_Virgin_Islands),
                borderColor: '#254117',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Brunei Darussalam',
                data: V8Data.map(v8 => v8.Brunei_Darussalam),
                borderColor: '#4AA02C',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Bulgaria',
                data: V8Data.map(v8 => v8.Bulgaria),
                borderColor: '#73A16C',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Burkina Faso',
                data: V8Data.map(v8 => v8.Burkina_Faso),
                borderColor: '#99C68E',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Burundi',
                data: V8Data.map(v8 => v8.Burundi),
                borderColor: '#9CB071',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Cambodia',
                data: V8Data.map(v8 => v8.Cambodia),
                borderColor: '#9DC209',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Canada',
                data: V8Data.map(v8 => v8.Canada),
                borderColor: '#57E964',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Cape Verde',
                data: V8Data.map(v8 => v8.Cape_Verde),
                borderColor: '#36F57F',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Central African Republic',
                data: V8Data.map(v8 => v8.Central_African_Republic),
                borderColor: '#5FFB17',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Chad',
                data: V8Data.map(v8 => v8.Chad),
                borderColor: '#66FF00',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Chile',
                data: V8Data.map(v8 => v8.Chile),
                borderColor: '#B1FB17',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'China',
                data: V8Data.map(v8 => v8.China),
                borderColor: '#DAEE01',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Colombia',
                data: V8Data.map(v8 => v8.Colombia),
                borderColor: '#64E986',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Comoros',
                data: V8Data.map(v8 => v8.Comoros),
                borderColor: '#98FF98',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Congo',
                data: V8Data.map(v8 => v8.Congo),
                borderColor: '#E3F9A6',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Cook Islands',
                data: V8Data.map(v8 => v8.Cook_Islands),
                borderColor: '#F0E68C',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Costa Rica',
                data: V8Data.map(v8 => v8.Costa_Rica),
                borderColor: '#FFFFC2',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Côte d´Ivoire',
                data: V8Data.map(v8 => v8.Côte_dIvoire),
                borderColor: '#F5DEB3',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Croatia',
                data: V8Data.map(v8 => v8.Croatia),
                borderColor: '#FFF380',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Cuba',
                data: V8Data.map(v8 => v8.Cuba),
                borderColor: '#EE9A4D',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Curaçao',
                data: V8Data.map(v8 => v8.Curaçao),
                borderColor: '#C19A6B',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Cyprus',
                data: V8Data.map(v8 => v8.Cyprus),
                borderColor: '#C8B560',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Czech Republic',
                data: V8Data.map(v8 => v8.Czech_Republic),
                borderColor: '#B5A642',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'North Korea',
                data: V8Data.map(v8 => v8.North_Korea),
                borderColor: '#CD853F',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Democratic Republic of the Congo',
                data: V8Data.map(v8 => v8.Democratic_Republic_of_the_Congo),
                borderColor: '#AB784E',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Denmark',
                data: V8Data.map(v8 => v8.Denmark),
                borderColor: '#8A865D',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Djibouti',
                data: V8Data.map(v8 => v8.Djibouti),
                borderColor: '#786D5F',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Dominica',
                data: V8Data.map(v8 => v8.Dominica),
                borderColor: '#43302E',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Dominican Republic',
                data: V8Data.map(v8 => v8.Dominican_Republic),
                borderColor: '#704214',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Ecuador',
                data: V8Data.map(v8 => v8.Ecuador),
                borderColor: '#7F5217',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Egypt',
                data: V8Data.map(v8 => v8.Egypt),
                borderColor: '#7E3517',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'El Salvador',
                data: V8Data.map(v8 => v8.El_Salvador),
                borderColor: '#C35817',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Equatorial Guinea',
                data: V8Data.map(v8 => v8.Equatorial_Guinea),
                borderColor: '#C47451',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Eritrea',
                data: V8Data.map(v8 => v8.Eritrea),
                borderColor: '#E66C2C',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Estonia',
                data: V8Data.map(v8 => v8.Estonia),
                borderColor: '#FF8040',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Ethiopia',
                data: V8Data.map(v8 => v8.Ethiopia),
                borderColor: '#F67280',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Faeroe Islands',
                data: V8Data.map(v8 => v8.Faeroe_Islands),
                borderColor: '#FF6347',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Micronesia',
                data: V8Data.map(v8 => v8.Micronesia_Federated_States_of),
                borderColor: '#C24641',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Fiji',
                data: V8Data.map(v8 => v8.Fiji),
                borderColor: '#990012',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Finland',
                data: V8Data.map(v8 => v8.Finland),
                borderColor: 'blue',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'France',
                data: V8Data.map(v8 => v8.France),
                borderColor: '#660000',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'French Guiana',
                data: V8Data.map(v8 => v8.French_Guiana),
                borderColor: '#7D0552',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'French Polynesia',
                data: V8Data.map(v8 => v8.French_Polynesia),
                borderColor: '#7F5A58',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Gabon',
                data: V8Data.map(v8 => v8.Gabon),
                borderColor: '#C48793',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Gambia',
                data: V8Data.map(v8 => v8.Gambia),
                borderColor: '#E8ADAA',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Georgia',
                data: V8Data.map(v8 => v8.Georgia),
                borderColor: '#FFCBA4',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Germany',
                data: V8Data.map(v8 => v8.Germany),
                borderColor: '#FFE6E8',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Ghana',
                data: V8Data.map(v8 => v8.Ghana),
                borderColor: '#FAAFBA',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Greece',
                data: V8Data.map(v8 => v8.Greece),
                borderColor: '#F778A1',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Greenland',
                data: V8Data.map(v8 => v8.Greenland),
                borderColor: '#F660AB',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Grenada',
                data: V8Data.map(v8 => v8.Grenada),
                borderColor: '#F6358A',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Guadeloupe',
                data: V8Data.map(v8 => v8.Guadeloupe),
                borderColor: '#E759AC',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Guatemala',
                data: V8Data.map(v8 => v8.Guatemala),
                borderColor: '#FA2A55',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Guinea',
                data: V8Data.map(v8 => v8.Guinea),
                borderColor: '#CA226B',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Guinea-Bissau',
                data: V8Data.map(v8 => v8.Guinea_Bissau),
                borderColor: '#C12283',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Guyana',
                data: V8Data.map(v8 => v8.Guyana),
                borderColor: '#5985A3',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Haiti',
                data: V8Data.map(v8 => v8.Haiti),
                borderColor: '#4FB256',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Honduras',
                data: V8Data.map(v8 => v8.Honduras),
                borderColor: '#56646E',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Hong Kong',
                data: V8Data.map(v8 => v8.Hong_Kong),
                borderColor: '#B6CA47',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Hungary',
                data: V8Data.map(v8 => v8.Hungary),
                borderColor: '#C66D94',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Iceland',
                data: V8Data.map(v8 => v8.Iceland),
                borderColor: '#E06F33',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'India',
                data: V8Data.map(v8 => v8.India),
                borderColor: '#27E5AE',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Indonesia',
                data: V8Data.map(v8 => v8.Indonesia),
                borderColor: '#F9C0CC',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Iraq',
                data: V8Data.map(v8 => v8.Iraq),
                borderColor: '#DFB61F',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Ireland',
                data: V8Data.map(v8 => v8.Ireland),
                borderColor: '#483D8B',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Iran',
                data: V8Data.map(v8 => v8.Iran),
                borderColor: '#4B0150',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Israel',
                data: V8Data.map(v8 => v8.Israel),
                borderColor: '#4B0082',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Italy',
                data: V8Data.map(v8 => v8.Italy),
                borderColor: '#342D7E',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Jamaica',
                data: V8Data.map(v8 => v8.Jamaica),
                borderColor: '#8B008B',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Japan',
                data: V8Data.map(v8 => v8.Japan),
                borderColor: '#86608E',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Jordan',
                data: V8Data.map(v8 => v8.Jordan),
                borderColor: '#9400D3',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Kazakhstan',
                data: V8Data.map(v8 => v8.Kazakhstan),
                borderColor: '#B041FF',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Kenya',
                data: V8Data.map(v8 => v8.Kenya),
                borderColor: '#9D00FF',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Kiribati',
                data: V8Data.map(v8 => v8.Kiribati),
                borderColor: '#967BB6',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Kosovo',
                data: V8Data.map(v8 => v8.Kosovo),
                borderColor: '#9370DB',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Kuwait',
                data: V8Data.map(v8 => v8.Kuwait),
                borderColor: '#CCCCFF',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Kyrgyzstan',
                data: V8Data.map(v8 => v8.Kyrgyzstan),
                borderColor: '#E0B0FF',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Laos',
                data: V8Data.map(v8 => v8.Laos),
                borderColor: '#DDA0DD',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Latvia',
                data: V8Data.map(v8 => v8.Latvia),
                borderColor: '#E9CFEC',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Lebanon',
                data: V8Data.map(v8 => v8.Lebanon),
                borderColor: '#E1D9D1',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Lesotho',
                data: V8Data.map(v8 => v8.Lesotho),
                borderColor: '#F8B88B',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Liberia',
                data: V8Data.map(v8 => v8.Liberia),
                borderColor: '#1D8CAF',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Libya',
                data: V8Data.map(v8 => v8.Libya),
                borderColor: '#0AADDF',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Liechtenstein',
                data: V8Data.map(v8 => v8.Liechtenstein),
                borderColor: '#1E7F4B',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Lithuania',
                data: V8Data.map(v8 => v8.Lithuania),
                borderColor: '#A71867',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Luxembourg',
                data: V8Data.map(v8 => v8.Luxembourg),
                borderColor: '#245CA5',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Macao',
                data: V8Data.map(v8 => v8.Macao),
                borderColor: '#C52248',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'North Macedonia',
                data: V8Data.map(v8 => v8.North_Macedonia),
                borderColor: '#B5B53C',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Madagascar',
                data: V8Data.map(v8 => v8.Madagascar),
                borderColor: '#6B400D',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Malawi',
                data: V8Data.map(v8 => v8.Malawi),
                borderColor: '#3BC8DE',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Malaysia',
                data: V8Data.map(v8 => v8.Malaysia),
                borderColor: '#E33054',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Maldives',
                data: V8Data.map(v8 => v8.Maldives),
                borderColor: '#C96547',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Mali',
                data: V8Data.map(v8 => v8.Mali),
                borderColor: '#A21D9F',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Malta',
                data: V8Data.map(v8 => v8.Malta),
                borderColor: '#9D9957',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Marshall Islands',
                data: V8Data.map(v8 => v8.Marshall_Islands),
                borderColor: '#EAA23D',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Martinique',
                data: V8Data.map(v8 => v8.Martinique),
                borderColor: '#2F19AC',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Mauritania',
                data: V8Data.map(v8 => v8.Mauritania),
                borderColor: '#9C8FE8',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Mauritius',
                data: V8Data.map(v8 => v8.Mauritius),
                borderColor: '#C13071',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Mayotte',
                data: V8Data.map(v8 => v8.Mayotte),
                borderColor: '#A725B9',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Mexico',
                data: V8Data.map(v8 => v8.Mexico),
                borderColor: '#D29DD9',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Mongolia',
                data: V8Data.map(v8 => v8.Mongolia),
                borderColor: '#BD324E',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Montenegro',
                data: V8Data.map(v8 => v8.Montenegro),
                borderColor: '#DDACB6',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Montserrat',
                data: V8Data.map(v8 => v8.Montserrat),
                borderColor: '#A9C02A',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Morocco',
                data: V8Data.map(v8 => v8.Morocco),
                borderColor: '#94A919',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Mozambique',
                data: V8Data.map(v8 => v8.Mozambique),
                borderColor: '#4D10A8',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Myanmar',
                data: V8Data.map(v8 => v8.Myanmar),
                borderColor: '#2B0761',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Namibia',
                data: V8Data.map(v8 => v8.Namibia),
                borderColor: '#6004EA',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Nauru',
                data: V8Data.map(v8 => v8.Nauru),
                borderColor: '#2091B0',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Nepal',
                data: V8Data.map(v8 => v8.Nepal),
                borderColor: '#4CDF35',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Netherlands',
                data: V8Data.map(v8 => v8.Netherlands),
                borderColor: '#87456C',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'New Caledonia',
                data: V8Data.map(v8 => v8.New_Caledonia),
                borderColor: '#CFCD3C',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'New Zealand',
                data: V8Data.map(v8 => v8.New_Zealand),
                borderColor: '#C6C69E',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Nicaragua',
                data: V8Data.map(v8 => v8.Nicaragua),
                borderColor: '#16D2A8',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Niger',
                data: V8Data.map(v8 => v8.Niger),
                borderColor: '#A6E9DA',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Nigeria',
                data: V8Data.map(v8 => v8.Nigeria),
                borderColor: '#7A1ACA',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Niue',
                data: V8Data.map(v8 => v8.Niue),
                borderColor: '#700EC1',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Norway',
                data: V8Data.map(v8 => v8.Norway),
                borderColor: '#CC162C',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Occupied Palestinian Territory',
                data: V8Data.map(v8 => v8.Occupied_Palestinian_Territory),
                borderColor: '#E3B0B6',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Oman',
                data: V8Data.map(v8 => v8.Oman),
                borderColor: '#740815',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Pakistan',
                data: V8Data.map(v8 => v8.Pakistan),
                borderColor: '#2AC35F',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Palau',
                data: V8Data.map(v8 => v8.Palau),
                borderColor: '#E3D066',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Panama',
                data: V8Data.map(v8 => v8.Panama),
                borderColor: '#514603',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Papua New Guinea',
                data: V8Data.map(v8 => v8.Papua_New_Guinea),
                borderColor: '#DCC95B',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Paraguay',
                data: V8Data.map(v8 => v8.Paraguay),
                borderColor: '#D9661D',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Peru',
                data: V8Data.map(v8 => v8.Peru),
                borderColor: '#9F19DE',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Philippines',
                data: V8Data.map(v8 => v8.Philippines),
                borderColor: '#9E0FE2',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Bolivia',
                data: V8Data.map(v8 => v8.Bolivia),
                borderColor: '#0AB981',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Poland',
                data: V8Data.map(v8 => v8.Poland),
                borderColor: '#B37D42',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Portugal',
                data: V8Data.map(v8 => v8.Portugal),
                borderColor: '#147697',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Qatar',
                data: V8Data.map(v8 => v8.Qatar),
                borderColor: '#3010CE',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Cameroon',
                data: V8Data.map(v8 => v8.Cameroon),
                borderColor: '#BE2F5A',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'South Korea',
                data: V8Data.map(v8 => v8.South_Korea),
                borderColor: '#2D7ECE',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Moldova',
                data: V8Data.map(v8 => v8.Moldova),
                borderColor: '#309926',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'South Sudan',
                data: V8Data.map(v8 => v8.South_Sudan),
                borderColor: '#C04D23',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Sudan',
                data: V8Data.map(v8 => v8.Sudan),
                borderColor: '#9D320B',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Réunion',
                data: V8Data.map(v8 => v8.Réunion),
                borderColor: '#D714B6',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Romania',
                data: V8Data.map(v8 => v8.Romania),
                borderColor: '#CF5DBC',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Russia',
                data: V8Data.map(v8 => v8.Russian_Federation),
                borderColor: '#D767C4',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Rwanda',
                data: V8Data.map(v8 => v8.Rwanda),
                borderColor: '#6134CA',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Saint Helena',
                data: V8Data.map(v8 => v8.Saint_Helena),
                borderColor: '#B7CA27',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Saint Lucia',
                data: V8Data.map(v8 => v8.Saint_Lucia),
                borderColor: '#CE2735',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Sint Maarten',
                data: V8Data.map(v8 => v8.Sint_Maarten_Dutch_part),
                borderColor: '#5C19AA',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Samoa',
                data: V8Data.map(v8 => v8.Samoa),
                borderColor: '#3F0680',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Sao Tome and Principe',
                data: V8Data.map(v8 => v8.Sao_Tome_and_Principe),
                borderColor: '#9B54EC',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Saudi Arabia',
                data: V8Data.map(v8 => v8.Saudi_Arabia),
                borderColor: '#45D89D',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Senegal',
                data: V8Data.map(v8 => v8.Senegal),
                borderColor: '#63D4A7',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Serbia',
                data: V8Data.map(v8 => v8.Serbia),
                borderColor: '#C2B53E',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Seychelles',
                data: V8Data.map(v8 => v8.Seychelles),
                borderColor: '#43C086',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Sierra Leone',
                data: V8Data.map(v8 => v8.Sierra_Leone),
                borderColor: '#E33C44',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Singapore',
                data: V8Data.map(v8 => v8.Singapore),
                borderColor: '#CA9039',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Slovakia',
                data: V8Data.map(v8 => v8.Slovakia),
                borderColor: '#DC2019',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Slovenia',
                data: V8Data.map(v8 => v8.Slovenia),
                borderColor: '#48C185',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Solomon Islands',
                data: V8Data.map(v8 => v8.Solomon_Islands),
                borderColor: '#0B9450',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Somalia',
                data: V8Data.map(v8 => v8.Somalia),
                borderColor: '#9034D7',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'South Africa',
                data: V8Data.map(v8 => v8.South_Africa),
                borderColor: '#B59214',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Spain',
                data: V8Data.map(v8 => v8.Spain),
                borderColor: '#D9261C',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Sri Lanka',
                data: V8Data.map(v8 => v8.Sri_Lanka),
                borderColor: '#13ACB4',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Saint Kitts and Nevis',
                data: V8Data.map(v8 => v8.Saint_Kitts_and_Nevis),
                borderColor: '#078E95',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Saint Pierre and Miquelon',
                data: V8Data.map(v8 => v8.Saint_Pierre_and_Miquelon),
                borderColor: '#A0CED1',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Saint Vincent and the Grenadines',
                data: V8Data.map(v8 => v8.Saint_Vincent_and_the_Grenadines),
                borderColor: '#AE29BB',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Suriname',
                data: V8Data.map(v8 => v8.Suriname),
                borderColor: '#D997E0',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Swaziland',
                data: V8Data.map(v8 => v8.Swaziland),
                borderColor: '#310335',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Sweden',
                data: V8Data.map(v8 => v8.Sweden),
                borderColor: '#F7A8FE',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Switzerland',
                data: V8Data.map(v8 => v8.Switzerland),
                borderColor: '#D89FDE',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Syria',
                data: V8Data.map(v8 => v8.Syria),
                borderColor: '#D53AE4',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Taiwan',
                data: V8Data.map(v8 => v8.Taiwan),
                borderColor: '#BE8855',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Tajikistan',
                data: V8Data.map(v8 => v8.Tajikistan),
                borderColor: '#BF6C20',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Thailand',
                data: V8Data.map(v8 => v8.Thailand),
                borderColor: '#E2C5AC',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Timor-Leste',
                data: V8Data.map(v8 => v8.Timor_Leste),
                borderColor: '#B43AE5',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Togo',
                data: V8Data.map(v8 => v8.Togo),
                borderColor: '#600882',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Tonga',
                data: V8Data.map(v8 => v8.Tonga),
                borderColor: '#D1A2E3',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Trinidad and Tobago',
                data: V8Data.map(v8 => v8.Trinidad_and_Tobago),
                borderColor: '#D11F54',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Tunisia',
                data: V8Data.map(v8 => v8.Tunisia),
                borderColor: '#97767F',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Turkey',
                data: V8Data.map(v8 => v8.Turkey),
                borderColor: '#39B575',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Turkmenistan',
                data: V8Data.map(v8 => v8.Turkmenistan),
                borderColor: '#90CDAD',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Turks and Caicos Islands',
                data: V8Data.map(v8 => v8.Turks_and_Caicos_Islands),
                borderColor: '#264F8C',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Tuvalu',
                data: V8Data.map(v8 => v8.Tuvalu),
                borderColor: '#99BAEB',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Uganda',
                data: V8Data.map(v8 => v8.Uganda),
                borderColor: '#81A4D8',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Ukraine',
                data: V8Data.map(v8 => v8.Ukraine),
                borderColor: '#F7F705',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'United Arab Emirates',
                data: V8Data.map(v8 => v8.United_Arab_Emirates),
                borderColor: '#757506',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'United Kingdom',
                data: V8Data.map(v8 => v8.United_Kingdom),
                borderColor: '#342AC8',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Tanzania',
                data: V8Data.map(v8 => v8.Tanzania),
                borderColor: '#C3C0E8',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'USA',
                data: V8Data.map(v8 => v8.USA),
                borderColor: '#6560A7',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Uruguay',
                data: V8Data.map(v8 => v8.Uruguay),
                borderColor: '#ACA9CE',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Uzbekistan',
                data: V8Data.map(v8 => v8.Uzbekistan),
                borderColor: '#1A9E3D',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Vanuatu',
                data: V8Data.map(v8 => v8.Vanuatu),
                borderColor: '#154D24',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Venezuela',
                data: V8Data.map(v8 => v8.Venezuela),
                borderColor: '#755030',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Vietnam',
                data: V8Data.map(v8 => v8.Viet_Nam),
                borderColor: '#9ECDAA',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Wallis and Futuna Islands',
                data: V8Data.map(v8 => v8.Wallis_and_Futuna_Islands),
                borderColor: '#60836A',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Yemen',
                data: V8Data.map(v8 => v8.Yemen),
                borderColor: '#13AF3D',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Zambia',
                data: V8Data.map(v8 => v8.Zambia),
                borderColor: '#CC9321',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
            {
                label: 'Zimbabwe',
                data: V8Data.map(v8 => v8.Zimbabwe),
                borderColor: '#C4B087',
                backgroundColor: 'white',
                fill: false,
                parsing: {
                    yAxisKey: 'y',
                    xAxisKey: 'x'
                }
            },
        ]
    }

    const options = {
        type: 'line',
        spanGaps: true,
        showLine: true,
        responsive: true,
        animation: false,

        tooltip: {
            mode: 'index'
        },

        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        },

        elements: {
            point: {
                radius: 0,
            },
        },

        scales: {
            y: {
                position: 'left',
                stacked: true,
                min: 0,
                max: 40000,

                title: {
                    display: true,
                    text: "MtC02Yr",
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Years'
                }
            },
        },

        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "C02 emissions by country",
            },
        }
    };

    return (
        <div className='V8text'>
            <h3>CO2 emissions by country</h3>
            <p>
                A stacked line chart of country-specific co2 emissions over time, time period is ~60 years.
            </p>
            <div className='V8' style={{ width: "100%" }}>
                <a href="https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D">Dataset source<br /></a>
                <a href="https://www.icos-cp.eu/science-and-impact/global-carbon-budget/2021">Description source</a>
                <Line
                    options={options}
                    data={data}
                />
            </div>
        </div>
    )
}

export default V8;