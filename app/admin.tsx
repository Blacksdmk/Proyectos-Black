import { View, Text, ScrollView, StyleSheet } from 'react-native';
import database from '../constants/data.json'; // Importación directa del archivo

export default function AdminPanel() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Panel de Administración (Local)</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Estadísticas Generales</Text>
        <Text>Usuarios Totales: {database.stats.usuarios_totales}</Text>
        <Text>Visitas Hoy: {database.stats.visitas_hoy}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Lista de Usuarios</Text>
        {database.usuarios.map((u) => (
          <Text key={u.id}>• {u.nombre} - [{u.rango}]</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { padding: 15, backgroundColor: '#f5f5f5', borderRadius: 10, marginBottom: 15 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 }
});
