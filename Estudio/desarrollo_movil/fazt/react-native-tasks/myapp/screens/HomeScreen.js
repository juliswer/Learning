import React, {useEffect, useState} from 'react';
import { Text, FlatList } from 'react-native';
import {getTasks} from '../api'
import TaskList from '../components/taskList'
import Layout from '../components/Layout';

const HomeScreen = () => (
    <Layout>
        <TaskList/>
    </Layout>
);

export default HomeScreen;
