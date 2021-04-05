import React, { useEffect, useState } from 'react';
import { Avatar, TextInput } from 'react-native-paper';
import { Text } from 'react-native'
import { Container, ContainerDateOfBirth, ContainerGender, ContainerIcon, ContainerInput } from './styles';

//TODO: terminar de estilizar e trocar ícone.

export default function CreateChildren() {
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [school, setSchool] = useState('');
    const [year, setYear] = useState('');
    

    return (
        <Container>

            <ContainerIcon>
                <Avatar.Icon size={80} icon='account' />
            </ContainerIcon>
            
                <TextInput mode='outlined' label='Nome completo da criança' placeholder={'Digite a data'} value={name} onChangeText={text => setName(text)}/>
         
            <ContainerInput>
                
                <ContainerDateOfBirth>
                <TextInput mode='outlined' label='Data de nascimento' placeholder={'Digite a data'} value={dateOfBirth} onChangeText={text => setDateOfBirth(text)}/>
                </ContainerDateOfBirth>

                <ContainerGender>
                    <TextInput mode='outlined' label='Sexo' placeholder={'F'} value={gender} onChangeText={text => setGender(text)} />
                </ContainerGender>

            </ContainerInput>
            
            <TextInput mode='outlined' label='Endereço' placeholder={'Digite o endereço'} value={address} onChangeText={text => setAddress(text)}/>
            <TextInput mode='outlined' label='Escola' placeholder={'Selecione a escola'} value={school} onChangeText={text => setSchool(text)}/>
            <TextInput mode='outlined' label='Ano' placeholder={'Selecione o ano do EF/EM'} value={year} onChangeText={text => setYear(text)}/>

            <Text>Próximo</Text>
        </Container>
    );
}