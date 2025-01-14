import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiConnector } from '../services/apiConnector';
import { serviceEndpoints } from '../services/apis';

const {
    SERVICE_DETAILS_API,
    CREATE_SERVICE_API,
    EDIT_SERVICE_API,
    GET_ALL_SERVICES_API,
    DELETE_SERVICE_API,
    UPDATE_SERVICE_STATUS_API,
    ACTIVE_SERVICES_API
} = serviceEndpoints


export const useServices = () => {

    return useQuery({
        queryKey: ['SERVERICES'],
        queryFn: async () => {
            const response = await apiConnector("GET", ACTIVE_SERVICES_API);

            console.log(response)

            return response?.data?.data;
        },
        staleTime: 5000
    })
}