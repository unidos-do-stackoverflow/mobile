import React, { useState } from 'react';
import { View } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { ContainerIcon, IconModal, Text, TextBold } from './styles';

//TODO: Trocar ícones

export default function Home() {

    return (

        <View>
            <Text>Você ainda não possui nenhuma criança cadastrada :( </Text>
			<TextBold>Registre abaixo para prosseguir com o pedido de doação</TextBold>

			<ContainerIcon>
				<Ionicons name="md-person-add-sharp" size={36} color="black" />
			</ContainerIcon>

            <IconModal>
		 		<AntDesign name="pluscircle" size={36} color="black" />
		    </IconModal> 

         </View>

    );
}


