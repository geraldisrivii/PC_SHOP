import { Ref, ref, watch } from 'vue';
import { LoginFields } from '@/types/User';
import Validator from '@/classes/Validator';
import LoginRules from '@/Validation/LoginRules';


export const useLoginFields = () => {

    const isValidAll = ref(false);

    const DataFields: Ref<LoginFields> = ref({
        login: '',
        password: '',
    })

    const isntValidFields: Ref<LoginFields> = ref({
        login: null,
        password: null,
    })

    const ValidFields: Ref<LoginFields> = ref({
        login: null,
        password: null,
    })


    const validData = async () => {

        let validator = new Validator<LoginFields>({
            password: DataFields.value.password,
            login: DataFields.value.login,
        });

        validator.setRules(LoginRules);

        let validFields = await validator.run();

        ValidFields.value = validFields;

        isntValidFields.value = validator.getIsntValidFields();

        if (validator.isAllFieldsValid()) {
            isValidAll.value = true
        } else {
            isValidAll.value = false
        }
    }

    watch(DataFields, () => {
        validData()
    }, { deep: true })

    return {
        DataFields,
        isntValidFields,
        ValidFields,
        validData,
        isValidAll
    }
}