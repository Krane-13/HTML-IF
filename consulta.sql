--1)
select * from empregado

--2)
select * from departamento

--3)
select empregado.nome_emp from empregado

--4)
select empregado.nome_emp from empregado order by nome_emp asc

--5)
select empregado.nome_emp from empregado order by nome_emp desc

--6)
select departamento.nome_depto from departamento 

--7)
select empregado.nome_emp, departamento.nome_depto from empregado, departamento
where empregado.codigo_depto = departamento.codigo_depto

--8)
select departamento.nome_depto, count(empregado.nome_emp)
from departamento, empregado
where empregado.codigo_depto = departamento.codigo_depto
group by departamento.nome_depto
order by count(empregado.nome_emp)desc

--9)
select departamento.nome_depto, count(empregado.nome_emp)
from departamento, empregado
where empregado.codigo_depto = departamento.codigo_depto
group by departamento.nome_depto
order by count(empregado.nome_emp) asc

--10)
select distinct nome_depto
from departamento, empregado
where empregado.codigo_depto = departamento.codigo_depto

--11)
select distinct nome_depto
from departamento, empregado
where nome_depto not in(select distinct nome_depto
from departamento, empregado
where empregado.codigo_depto = departamento.codigo_depto)