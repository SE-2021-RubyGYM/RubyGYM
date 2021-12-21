#include <stdio.h>
void swap(int* a, int* b)
{
	int tmp = *a;
	*a = *b;
	*b = tmp;
}
void nhapham(int a[], int n)
{
	for (int i = 0; i < n; i++)
	{
		printf("gia tri phan tu a[%d]= ", i );
		scanf("%d", &a[i]);
	}
}
int main(void)
{
	int n;
	int a[20];
	printf("Nhap so luong phan tu:\n");
	scanf("%d", &n);
	nhapham(a, n);
	for (int i = 0; i <n; i++)
	{
		for (int j = i + 1; j < n; j++)
			if (a[i]<a[j])
			
			swap(&a[i], &a[j]);
	}
	int chuan = a[0];
	int count = 0;
	for (int i = 0; i < n; i++)
	{
		if (a[i]==chuan)
		{
			count++;
		}
		if (chuan!=a[i])
		{
			printf("so %d xuat hien %d lan\n", a[i - 1], count);
			chuan = a[i];
			count = 1;
		}
		if (i==n-1)
		{
			printf("so %d xuat hien %d lan\n", a[i], count);

		}
	}
	return 0;
}
