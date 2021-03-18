import { Box, Divider, List, ListItem ,ListIcon,Icon} from '@chakra-ui/react';
import { MdSettings } from "react-icons/md";

import React, { Component } from 'react';


export class Menu_bar extends Component {
    
    render() {
        var list =[
            
            {
                itemName: "Overview",
                itemLink:"./"
            },
            {
                itemName: "Tickets",
                itemLink:"./"
            },
            {
                itemName: "Idea",
                itemLink:""
            },
            {
                itemName: "contact",
                itemLink:""
            },{
                itemName: "Agents",
                itemLink:""
            },
            {
                itemName: "Articles",
                itemLink:""
            }

        ]
        const items= list.map((item) =>
                    <ListItem h="56px"  p="10px 0">
                         {item.itemName}
                    </ListItem>)
        return (
            <Box backgroundColor="#363740" w="255px" h="100vh">
                <List w="150px" color= "#A4A6B3"  m="auto">
                     {items}
                </List>
                <Divider width="100%" />

            
            </Box>
            
        )
    }
}

export default Menu_bar
