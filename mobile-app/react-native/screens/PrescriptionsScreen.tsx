import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { navimedClient, Prescription } from '../NaviMEDClient';

export const PrescriptionsScreen = () => {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadPrescriptions();
  }, []);

  const loadPrescriptions = async () => {
    try {
      const data = await navimedClient.getPrescriptions();
      setPrescriptions(data);
    } catch (error) {
      console.error('Error loading prescriptions:', error);
      Alert.alert('Error', 'Failed to load prescriptions');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    loadPrescriptions();
  };

  const handleRequestRefill = (prescriptionId: string, medicationName: string) => {
    Alert.alert(
      'Request Refill',
      `Request a refill for ${medicationName}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Request',
          onPress: async () => {
            try {
              await navimedClient.requestRefill(prescriptionId, 'Patient requested refill');
              Alert.alert('Success', 'Refill request submitted successfully');
              loadPrescriptions();
            } catch (error) {
              Alert.alert('Error', 'Failed to request refill');
            }
          },
        },
      ]
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready':
        return '#16a34a';
      case 'prescribed':
        return '#2563eb';
      case 'dispensed':
        return '#9ca3af';
      case 'refill_requested':
        return '#f59e0b';
      case 'cancelled':
        return '#ef4444';
      default:
        return '#666';
    }
  };

  const renderPrescription = ({ item }: { item: Prescription }) => (
    <View style={styles.prescriptionCard}>
      <View style={styles.header}>
        <Text style={styles.medicationName}>{item.medicationName}</Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
          <Text style={styles.statusText}>{item.status.replace('_', ' ')}</Text>
        </View>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Dosage:</Text>
        <Text style={styles.value}>{item.dosage}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Frequency:</Text>
        <Text style={styles.value}>{item.frequency}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Quantity:</Text>
        <Text style={styles.value}>{item.quantity}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Refills:</Text>
        <Text style={styles.value}>{item.refills} remaining</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Prescribed:</Text>
        <Text style={styles.value}>{formatDate(item.prescribedDate)}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Doctor:</Text>
        <Text style={styles.value}>{item.prescribingDoctorName}</Text>
      </View>

      {item.pharmacyName && (
        <View style={styles.detailRow}>
          <Text style={styles.label}>Pharmacy:</Text>
          <Text style={styles.value}>{item.pharmacyName}</Text>
        </View>
      )}

      {item.instructions && (
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsLabel}>Instructions:</Text>
          <Text style={styles.instructionsText}>{item.instructions}</Text>
        </View>
      )}

      {item.refills > 0 && item.status === 'ready' && (
        <TouchableOpacity
          style={styles.refillButton}
          onPress={() => handleRequestRefill(item.id, item.medicationName)}
        >
          <Text style={styles.refillButtonText}>Request Refill</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={prescriptions}
        renderItem={renderPrescription}
        keyExtractor={(item) => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No prescriptions found</Text>
          </View>
        }
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    padding: 15,
  },
  prescriptionCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  medicationName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#666',
    width: 100,
  },
  value: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    fontWeight: '500',
  },
  instructionsContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f3f4f6',
    borderRadius: 5,
  },
  instructionsLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  instructionsText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  refillButton: {
    marginTop: 10,
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  refillButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});
