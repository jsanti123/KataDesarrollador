
#Hash MD5
Md5 = "d4621655bd94041050b1c81a9f9c7b3b"


#Funcion que retorna el primer numero que se encuentre en un hash
def SelectedNumber(hash):
    for index in hash:
        if index.isdigit():
            return int(index)
    
S = SelectedNumber(Md5)


#Funcion que propone la primera solucion al problema
def solution1(lista, S):
    
    resultado = []
    for numero in lista:
        temp = []
        for digito in str(numero):
            if int(digito) < S:
                temp.append(digito)
        if temp != []:
            temp = int("".join(temp))
            resultado.append(temp)

    #invertir lista en O(n)
    for i in range(len(resultado)//2):
        temp = resultado[i]
        resultado[i] = resultado[len(resultado)-1-i]
        resultado[len(resultado)-1-i] = temp    

    return resultado


#Pruebas
print(solution1([1, 2, 3, 4, 5, 6], S))
print(solution1([10, 20, 30, 40], S))
print(solution1([6], S))
print(solution1([66], S))
print(solution1([65], S))
print(solution1([6, 2, 1], S))
print(solution1([60, 6, 5, 4, 3, 2, 7, 7, 29, 1], S))

print("----------------------------------------------------------------------")

def merge_sort(array):
    if len(array) > 1:
        # Dividir la lista en mitades
        mid = len(array) // 2
        left_half = array[:mid]
        right_half = array[mid:]

        # Llamadas recursivas para ordenar las mitades
        merge_sort(left_half)
        merge_sort(right_half)

        # Inicializar índices para recorrer las mitades y la lista principal
        i = j = k = 0

        # Fusionar las dos mitades ordenadas
        while i < len(left_half) and j < len(right_half):
            if left_half[i] < right_half[j]:
                array[k] = left_half[i]
                i += 1
            else:
                array[k] = right_half[j]
                j += 1
            k += 1

        # Verificar si hay elementos restantes en ambas mitades
        while i < len(left_half):
            array[k] = left_half[i]
            i += 1
            k += 1

        while j < len(right_half):
            array[k] = right_half[j]
            j += 1
            k += 1


def solution2(lista, S):
    resultado = []
    for numero in lista:
        if numero**2 < (S*10)+S:
            resultado.append(numero**2)

    merge_sort(resultado)

    return resultado

#Pruebas
print(solution2([1, 2, 3, 5, 6, 8, 9], S))
print(solution2([-2, -1], S))
print(solution2([-6, -5, 0, 5, 6], S))
print(solution2([-10, 10], S))

print("----------------------------------------------------------------------")

def solution3(lista):
    lista.sort()
    acumuladoMoneda = lista[0]
    if acumuladoMoneda > 1:
        return 1
    for index in range(1, len(lista)):
        if lista[index] > acumuladoMoneda+1:
            return acumuladoMoneda+1
        acumuladoMoneda += lista[index]
    
    return acumuladoMoneda + 1


print(solution3([5, 7, 3, 22, 88, 100]))
#print(solution3([1, 1, 1, 1, 1]))
#print(solution3([1, 5, 1, 1, 1, 10, 15, 20, 100]))

print("----------------------------------------------------------------------")


